const request = require('./lib/request.js');
const query   = require('./lib/query.js');

const datamuse = {};

Object.keys(query).forEach(function(name){
  datamuse[name] = (args) => {
    return request(query[name](args));
  };
});

module.exports = datamuse;
