/*'use strict';

const events  = require('events');
const em      = new events.EventEmitter();

em.on("time:event", timeEvent);
em.on("mod:three", mod3Event);

function timeEvent(interval) {
    console.log('timeEvent '+interval);
}

function mod3Event(mod3) {
    console.log('3 mod %s === 0 ',mod3);
}

setInterval(( function() {
            let i = 1;
            return function () {
                if(i % 3 === 0) {
                    em.emit('mod:three',i++);
                } else {
                    em.emit('time:event', i++);
                }
            };
})(),1000);*/

/*
'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');


function User () {
    EventEmitter.call(this);
}

util.inherits(User, EventEmitter);

function User (data) {
    this.data = data;
    this.on('user:save', sendMail);
    this.on('error', sendError);
    EventEmitter.call(this);
}


User.prototype.save = function () {  
    if(this.data.name){
        this.emit('user:save',this.data);
    }
    else {
        this.emit('error', new TypeError('User need an name'));
    }
};

util.inherits(User, EventEmitter);

function sendMail(user) {
    user.pass = Math.floor(Math.random() * (1000000 - 900000)) + 900000;
    util.log(`\n
            \tOla ${user.name}!
            \tbem vindo seu pass é ${user.pass}
            \tvocê tem 24 horas para muda-lo
            \tou tera que pedir reenvio\n`
            );
}

function sendError(err) {
    throw err;
}


const newUser = new User({name: 'Paulo', pass:'123'});

newUser.save();
*/

/*'use strict';
const mongoose = require('mongoose');
const util = require('util');

mongoose.connect('mongodb://localhost/aula7');

    let Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;         

    const schema = new Schema({
            id          : ObjectId,
            name        : {type : String, trin : true},
            type        : {type : String, trin : true},
            attack      : {type : Number},
            defence     : {type : Number},
            height      : {type : Number},
            description : {type : String, trin : true}
});

schema.pre('find',function (next) {
        this.start = Date.now();
        util.log("finding ...");
        next();
});

schema.post('find', function(result) {
        setTimeout(function(){
                console.log('finding end :P')
                },1000);
        });

const pokemon =  mongoose.model('Pokemon', schema);

pokemon.find({}, (err, data)=>{
    if(!err) console.log(pokemon);
    throw err;
});*/

/*const events  = require('events');
const event      = new events.EventEmitter();

event.on("paulo:mestre", ()=>{console.log("Paulo é mestre nas parada")});

event.emit("paulo:mestre");*/
/*
'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');


function User () {
    EventEmitter.call(this);
}

util.inherits(User, EventEmitter);

function User (data) {
    this.data = data;
    this.on('user:save', sendMail);
    this.on('error', sendError);
    EventEmitter.call(this);
}


User.prototype.save = function () {  
    if(this.data.name){
        this.emit('user:save',this.data);
    }
    else {
        this.emit('error', new TypeError('User need an name'));
    }
};

util.inherits(User, EventEmitter);

function sendMail(user) {
    user.pass = Math.floor(Math.random() * (1000000 - 900000)) + 900000;
    util.log(`\n
            \tOla ${user.name}!
            \tbem vindo seu pass é ${user.pass}
            \tvocê tem 24 horas para muda-lo
            \tou tera que pedir reenvio\n`
            );
}

function sendError(err) {
    throw err;
}


const newUser = new User({name: 'Paulo', pass:'123'});

newUser.save();*/

/*const EventEmitter = require('events').EventEmitter;
const util = require('util');

function Pokemon(data){
    this.data = data;
    this.on('init:pokemon', avisaInit);
    this.on('error',avisaError);
    EventEmitter.call(this);
};

Pokemon.prototype.init = function(){
    if (this.data.name) {
        this.emit('init:pokemon');
    } else {
        this.emit('error');
    };
};

function avisaInit(){
    console.log('init ativado');
};

function avisaError(){
    console.log('deu erro');
};


util.inherits(Pokemon,EventEmitter);

const data = {name : 'Pikachu'};

const poke = new Pokemon(data);

poke.init();*/

/*'use strict';

const fs = require( 'fs' );

function readFiles(path){
   return new Promise(function(resolve, reject){
      fs.readdir( path, (err, data) => {
        err ? reject( err ) : resolve( data );
      });
   });
}

function promiseAll(arr){
   return Promise.all(arr).then( function success(res){
      return res;
   })
   .catch(function error(err){
      throw err;
   });
};

promiseAll([
   readFiles( './'  ),
   readFiles( '../'  ),
])
.then( res => console.log(res))
.catch(err => console.error(err));*/