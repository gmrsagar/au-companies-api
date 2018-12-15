const Table = require('./table');
const utils = require('./utils');
const retext = require('retext');
const winston = require('winston');
const lang = require('lodash/lang');
const inflection = require('inflection');
const keywords = require('retext-keywords');
const nlcstToString = require('nlcst-to-string');

const { isNil } = lang;
const { splitAndTrim } = utils;

/**
 * Extracts link text from a markdown formatted string.
 *
 * @param {String} str
 * @returns {String}
 */
const extractCompanyName = (str = '') => {
  let [matched] = str.match(/\[(.*?)\]/g) || [];
  if (isNil(matched)) {
    return;
  }

  return matched.substring(1, matched.length - 1);
};

/**
 * Extracts URL from a markdown formatted string.
 *
 * @param {String} str
 * @returns {String}
 */
const extractUrl = (str = '') => {
  let [matched] = str.match(/\((http.*?)\)/g) || [];
  if (isNil(matched)) {
    return;
  }

  return matched.substring(1, matched.length - 1);
};


/**
 * Extract added contents from a parsed diff.
 *
 * @param {Object} parsedDiff
 * @returns {Array<string>}
 */
const extractDiff = (parsedDiff) => {
  return parsedDiff[0]
    .chunks
    .map(obj => obj.changes)
    .reduce((a, b) => a.concat(b), [])  // flatten array
    .filter((change) => change.type === 'add')
    .map((addition) => addition.content);
};

/**
 * Extract keywords from a description.
 *
 * @param {String} description
 * @returns {Promise}
 */
const extractKeywords = (description) => {
  let promise = new Promise((resolve, reject) => {
    retext().use(keywords).process(description, (err, file) => {
      if (err) {
        return reject(err);
      }

      return resolve(file);
    });
  });

  return promise.then(({ data }) => {
    return data.keywords.map((kw) => {
      let keyword = nlcstToString(kw.matches[0].node);
      let adjusted = keyword
        .toLowerCase()
        .replace(/[^\w\s]+/g, '');

      return inflection.singularize(adjusted);
    });
  });
};

/**
 * From a given string, extract locations and find or create all locations.
 *
 * @param {String} location
 * @return {Promise}
 */
const extractLocations = (location) => {
  let locations = splitAndTrim(location, ',');
  winston.info(`Parsed locations: ${locations}`);

  let locationsTable = new Table('Locations');

  return Promise.all(locations.map((location) => {
    return locationsTable.findOrCreateBy(`{Name} = "${location}"`, { 'Name': location });
  }))
  .catch((err) => winston.error(err));
};

/**
 * Mostly taken from https://github.com/poteto/hww-api/blob/5d44fdecabadc2e36d8d50885fcac1f11864a37a/lib/extractors.js
 */
module.exports = { extractUrl, extractDiff, extractKeywords, extractLocations, extractCompanyName };
