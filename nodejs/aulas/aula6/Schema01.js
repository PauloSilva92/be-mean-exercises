const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Criação do Schema
const schemaObj = {
  string : {
            type : String,
            enum : ['string', 'não string'],
            match : [/string/i, 'Não foi encontrada a palavra string 1'],
            maxlength : [7, 'String muito grande'],
            minlength: [2, 'String muito curta']
            },
  boolean : {
            type : Boolean
            },    
  number : {
            type : Number,
            max : [10, 'Numero muito grande'],
            min : [2, 'Numero muito pequeno']
           },
  array : {
           type : [String]
          },
  date : {
         type : Date
         },
  objectID : {
             type : Schema.Types.ObjectId  
             },
  mixed : {
          type : Schema.Types.Mixed
          }
};


const schemaTest = new Schema(schemaObj);

//console.log(schemaTest);

const Incorreto = {
    string : 'stringnumero2',
    boolean : true,
    number : 12,
    array : ['Paulo', 'Silva'],
    date : Date.now(),
    objectID : ['56e4d08d45228b2a7019d969'],
    mixed : [{name : 'obj1'}, {name : 'obj2'}]
};

const Model = mongoose.model('model',schemaTest);

const modelTeste = new Model(Incorreto);

modelTeste.save((err, data)=>{
   if(err) return console.log('Erro ',err);
   console.log('Foi ',data); 
});


/*
const Correto = {
    string : 'string',
    boolean : true,
    number : 4,
    array : ['Paulo', 'Silva'],
    date : Date.now(),
    objectID : ['56e4d08d45228b2a7019d969'],
    mixed : [{name : 'obj1'}, {name : 'obj2'}]
};

*/