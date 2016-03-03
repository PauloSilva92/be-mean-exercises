const debugHttp = require('debug-http');
debugHttp();

const http = require('http');
http.get('http://google.com');