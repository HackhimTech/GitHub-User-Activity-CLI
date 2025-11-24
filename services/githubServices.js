const {
  UserNotFoundError,
  BadResponseError,
} = require("../expections/fetchError");
const { print } = require("../utils/helper");

async function getUserActivity(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/events`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-agent": "Hackhim-cli",
      },
    });

    const activies = await res.json();

    if (activies.status === "404") {
      throw new UserNotFoundError("User activities not found");
    }

    return activies;
  } catch (err) {
    if (err instanceof UserNotFoundError || err instanceof BadResponseError) {
      print("❌ Failed:", err.message);
    } else {
      print("Error:", err.message);
    }
  }
}

module.exports = getUserActivity;
