/*
// Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.

function name(name) {
	if (typeof(name) !== 'string') {
		var err = new Error('Não é uma String');
		arguments[1](err, null)
	} else {
		arguments[1](null,name);
	}
}



name("paulo", function(err,name){
	if (err) {
		console.log(err);
	} else {
		console.log(name);
	}
});

// Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.

function soma(num1, num2 , callback) {
	if (typeof(num1) === 'number' && typeof(num2) === 'number') {
		callback(null,num1+num2);	
	} else {
		var err = new Error('Parametros inválidos');
		callback(err, null)
	}
	
};

soma(1,2, function(err,resultado){
	if (err) {
		console.log(err);
	} else {
		console.log(resultado);
	}
});

// Criar uma função que calcula a média de dois valores e imprima essa média uma outra função, como continuação da execução da mesma.

function media(num1, num2 , callback) {
	if (typeof(num1) === 'number' && typeof(num2) === 'number') {
		var med = (num1+num2)/2
		callback(null,med);	
	} else {
		var err = new Error('Parametros inválidos');
		callback(err, null)
	}
	
};

media(1,2, function(err,resultado){
	if (err) {
		console.log(err);
	} else {
		console.log(resultado);
	}
});

setTimeout(function(){
  console.log('intervalo');
  },2000);
console.log(process.uptime());


//fs


const fs = require('fs');
fs.writeFileSync('teste.txt', 'Esse é um texto para o arquivo de teste', 'utf-8');

var teste = fs.readFileSync('./teste.txt', 'utf-8');
console.log(teste);
//Esse é um texto para o arquivo de teste 

fs.writeFileSync('teste.txt', 'Esse é um texto modificado para fazer update no arquivo de teste', 'utf-8');
var teste = fs.readFileSync('./teste.txt', 'utf-8');
console.log(teste);
//Esse é um texto modificado para fazer update no arquivo de teste 

//fs.unlinkSync('./teste.txt');

fs.renameSync('./teste.txt', './novoteste.txt');
var teste = fs.readFileSync('./novoteste.txt', 'utf-8');
console.log(teste);
//Esse é um texto modificado para fazer update no arquivo de teste 
*/



const http = require('http');
const fs = require('fs');

http.createServer((req, res)=> {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(3000, ()=>{
    console.log('Server rodando na porta 3000');
});

