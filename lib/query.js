const queryString = require('query-string');

const stringify = (options) => {
  return queryString.stringify(options);
};

module.exports = {
  stringify: stringify,
  words: (options) => {
    return `words?${stringify(options)}`;
  },
  sugs: (options) => {
    return `sugs?${stringify(options)}`;
  }
};
