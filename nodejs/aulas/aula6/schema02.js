const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
    attack: Number,
    created: {type : Date, default : Date.now},
    defense: Number,
    height: Number,
    hp: Number,
    name: String,
    speed: Number,
    types: [String]
}

const pokemonSchema = new Schema(_schema);
const pokemonModel = mongoose.model('pokemons', pokemonSchema);

const query = { attack : {$gt : 50} };

pokemonModel.remove(query, (err, data)=>{
    if (err) return console.log('ERRO: ', err);
    console.log('Apagou: ', data)
});
 

/*
const query  = {name : /nerdmon/i,  attack : 49 };
const nerdmon = { 
    name: 'Nerdmon',
    attack : 49,
    defense : 35,
    height : 10,
    hp : 200,
    speed : 300,
    types : ['fire']
 };
 const options = { upsert : true };
  
 pokemonModel.update(query,nerdmon, options, (err,data)=>{
  if (err) return console.log('ERRO: ', err);
  console.log('Atualizou ou Inseriu: ', data);
 });


const query = {$and : [{attack : {$gt : 50}}, {height : {$gt : 0.5}} ] }
pokemonModel.find(query, (err,data)=>{
    if (err) return console.log('ERRO: ', err);
    console.log('Listou: ', data)
});

const data = [
    {
    "attack": 52,
    "created": "2013-11-03T15:05:41.271082",
    "defense": 43,
    "height": "6",
    "hp": 39,
    "name": "Charmander",
    "speed": 65,
    "types": [
        "fire"
    ]
    },
    {
    "attack": 64,
    "created": "2013-11-03T15:05:41.273462",
    "defense": 58,
    "height": "11",
    "hp": 58,
    "name": "Charmeleon",
    "speed": 80,
    "types": [
        "fire"
    ]
    },
    {
    "attack": 56,
    "created": "2013-11-03T15:05:41.305777",
    "defense": 35,
    "height": "3",
    "hp": 30,
    "name": "Rattata",
    "speed": 72,
    "types": [
        "normal"
    ]
    }
]

pokemonModel.create(data,function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
});
*/