'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'paulosilva92'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , path: '/api/pokemons/56d4e46cd537501100aa9722'
      , method: 'PUT'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
        }
      };

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.write(postData);
req.end();