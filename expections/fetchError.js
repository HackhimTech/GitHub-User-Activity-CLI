class UserNotFoundError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "User Not Found Error";
  }
}

class BadResponseError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "Bad response Error";
  }
}

module.exports = { UserNotFoundError, BadResponseError };
