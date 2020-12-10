class CustomError extends Error {
  constructor(statusCode, message, face) {
    super();
    this.statusCode = statusCode
    this.message = message
    this.face = face || ':(' 
  }
}

module.exports = CustomError;
