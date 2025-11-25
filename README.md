# GitHub User Activity

A simple command line interface (CLI) to fetch the recent activity of a GitHub user and display it in the terminal built with "NodeJs" (zero dependencies).

## Features

- fetch and list user recent events on github

## Installation

### Quick local use (recommended)

1. Clone or download this project
2. Run it directly (powershell):

```bash
node app.js github-activity "github-username"
```

## Requirements

This application runs from the command line, it accepts GitHub username as an argument, fetch the user's recent activity using the GitHub API, and display it in the terminal.

Provide the GitHub username as an argument when running the CLI.

```bash
github-activity <username>
```

fetch the recent activity of the specified GitHub user using the GitHub API. Display the fetched activity in the terminal.

## Output Example

```javascript
Output:
- Pushed 3 commits to kamranahmedse/developer-roadmap
- Opened a new issue in kamranahmedse/developer-roadmap
- Starred kamranahmedse/developer-roadmap
- ...
```

You can learn more about the GitHub API here.
https://docs.github.com/en/rest/activity/events?apiVersion=2022-11-28

## Project Structure

expections - Handling Errors
services - Functions that fetch user activities from github
utils - Holds helper functions
app.js - Main script (file you need)
README.md - This file

## Project URL

This project was inspired by Roadmap.sh
🔗 To the project below:

https://roadmap.sh/projects/github-user-activity

## License 😂

MIT ✈ 2025 Hackhim

Feel free to fork, improve, and use it however you like mate 👍
