'use strict';

const http = require('http');
var RESP = {
	name: 'resposta'
};

http.get({
  hostname : 'pokeapi.co',
  path: '/api/v2/language/5/',
},(response) => {
    let body = "";
    console.log('STATUS:'+ response.statusCode);
    console.log(response.headers);

    response.on('data', data=>{
      body += data;
    });

    response.on('end', function(){
       RESP.result = JSON.parse(body).name;
    });
}); 

http.createServer((request, response)=>{
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<h1>'+RESP.result+'<h1>');
	response.end();
}).listen(3000, function(){
	console.log('rodando nas porta 3000');
});