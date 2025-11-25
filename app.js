const UserNotFoundError = require("./expections/fetchError");
const getUserActivity = require("./services/githubServices");
const { print, table } = require("./utils/helper");

async function Main() {
  const command = process.argv;
  if (command.length > 3 || !command[2]) {
    print(`Invalid command! \nUsage: node app.js <github-username>`);
    return null;
  }

  const username = command[2];
  try {
    const events = await getUserActivity(username);

    if (!events) return null;

    const output = [];
    let repo;

    for (let event of events) {
      switch (event.type) {
        case "PushEvent":
          repo = event.repo?.name;
          const commits = event.payload.commits?.length;
          if (commits) output.push(`Pushed ${commits} commits to ${repo}`);
          else {
            output.push(`Pushed to ${repo}`);
          }
          break;

        case "IssuesEvent":
          repo = event.repo?.name;
          output.push(`Opened a new issue in ${repo}`);
          break;
        case "WatchEvent":
          repo = event.repo?.name;
          output.push(`Starred ${repo}`);
          break;
        case "CreateEvent":
          repo = event.repo?.name;
          output.push(`Create ${repo}`);
          break;
        case "CreateEvent":
          repo = event.repo?.name;
          output.push(`Created ${repo}`);
          break;
        case "MemberEvent":
          repo = event.repo?.name;
          output.push(`Member in ${repo}`);
          break;
      }
    }
    // print(output);
    print("Output:");
    output.map((event) => print(`- ${event}`));
    process.exit(0);
  } catch (err) {
    if (err instanceof UserNotFoundError) {
      print("❌ Failed:", err.message);
    } else {
      print("Something went wrong in Main, try again later!", err.message);
    }
    process.exit(1);
  }
}

Main();
