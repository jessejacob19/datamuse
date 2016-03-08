const queryString = require('query-string');
const request     = require('./request.js');

const stringify = (options) => {
  return queryString.stringify(options);
};

const wrap = (handler) => {
  return args => request(handler(args));
};

module.exports = {
  stringify: wrap(stringify),
  words: wrap(options => `words?${stringify(options)}`),
  sugs: wrap(options => `sugs?${stringify(options)}`)
};
