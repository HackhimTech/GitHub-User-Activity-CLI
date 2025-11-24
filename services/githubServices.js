const UserNotFoundError = require("../expections/fetchError");
const { print } = require("../utils/helper");

async function getUserActivity(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/events`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-agent": "Hackhim-cli",
      },
    });

    if (res.status === "404") {
      throw new UserNotFoundError("User not found");
    }

    const activies = await res.json();
    return activies;
  } catch (err) {
    print("Something went wrong, try again later!", err.message);
  }
}

module.exports = getUserActivity;