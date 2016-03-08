const got = require('got');

module.exports = (postUri) => {
  return got(`https://api.datamuse.com/${postUri}`);
};
