class UserNotFoundError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "User Not Found Error";
  }
}

module.exports = UserNotFoundError;
