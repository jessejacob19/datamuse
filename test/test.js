const request = require('../lib/request.js');

/*request('/words?ml=ringing in the ears')
  .then(response => {
    //console.log(response.body);
    console.log('request test was successful!');
  })
  .catch(error => {
    console.log(error.response.body);
  });*/

const datamuse = require('../index.js');

/*console.log(query.stringify({
  ml: 'ringing in the ears'
}));*/

datamuse.words({
  ml: 'ringing in the ears'
})
.then(console.log)
.catch(console.log);
