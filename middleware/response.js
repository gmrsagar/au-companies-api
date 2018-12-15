/**
 * JSON response helper.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Function}
 */
const response = (req, res, next) => {
  res.ok = () => res.status(200).json({status: 200, message: 'OK'});
  res.created = () => res.status(201).json({status: 201, message: 'Created'});
  res.accepted = () => res.status(202).json({status: 202, message: 'Accepted'});
  res.notFound = () => res.status(404).json({status: 404, message: 'Not Found'});
  res.forbidden = () => res.status(403).json({status: 403, message: 'Forbidden'});
  res.badRequest = () => res.status(400).json({status: 400, message: 'Bad Request'});
  res.serverError = () => res.status(500).json({status: 500, message: 'Internal Server Error'});

  next();
};

module.exports = response;
