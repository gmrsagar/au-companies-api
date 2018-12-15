/**
 * Splits and trims a string.
 *
 * @param {String} link
 * @param {String|RegExp} splitter
 */
const splitAndTrim = (link, splitter) => {
  return link
    .split(splitter)
    .map((s) => s.trim());
};

module.exports = { splitAndTrim };
