const errorHandler = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => next(err));
};

// eslint-disable-next-line no-unused-vars
const errorResponseFormatter = (err, req, res, next) => {
  if (process.env.NODE_ENV !== 'local') {
    return res.status(err.statusCode || 500).send({
      message: err.message,
      reaction: err.face,
      status: 0,
    });
  }

  return res.status(err.statusCode || 500).send({
    message: `${err.message} \n ${err.stack}`,
    reaction: err.face,
    status: 0,
  });
};

module.exports = { errorHandler, errorResponseFormatter };

