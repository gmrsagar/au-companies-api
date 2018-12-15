const winston = require('winston');
const fetch = require('node-fetch');
const lang = require('lodash/lang');
const parseDiff = require('parse-diff');

const { isNil } = lang;

/**
 * Fetch commit diff from GitHub.
 *
 * @param {String} url
 * @returns {Promise}
 */
const fetchCommit = (url) => {
  if (isNil(url)) { return; }

  winston.info(`Fetching commit ${url}`);

  return fetch(url, { headers: { Accept: 'application/vnd.github.diff' } })
    .then((res) => res.text())
    .then((rawDiff) => parseDiff(rawDiff))
    .catch((err) => winston.error(err));
};

/**
 * Direct copy of https://github.com/poteto/hww-api/blob/cc6af61b35b247376f47bb63f1240d2f15a017f0/lib/fetch-commit.js
 */
module.exports = fetchCommit;
