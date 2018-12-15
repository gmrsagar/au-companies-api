const winston = require('winston');

/**
 * Generic error handler.
 *
 * @param {Object} err
 * @param {Object} req
 * @param {Object} res
 */
const errorHandler = (err, req, res, next) => {   // eslint-disable-line no-unused-vars
  winston.error(err);

  if (err.name === 'ValidationError') {
    return res.status(400).json({status: 400, message: err.message});
  }

  res.serverError();
};

module.exports = errorHandler;
