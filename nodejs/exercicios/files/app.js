const http = require('http');
const fs = require('fs');

http.createServer((req, res)=> {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      console.log(err);
      res.end("Página não encontrada");
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(3000, ()=>{
    console.log('Server rodando na porta 3000');
});
