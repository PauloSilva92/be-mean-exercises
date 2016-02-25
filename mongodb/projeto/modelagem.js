
mongoexport --db be-mean-mongo --collection projects --out projects.json

mongoexport --db be-mean-mongo --collection users --out users.json

activity: {
  name: { type : String },
  ,description: { type : String }
  ,date_begin: { type : Date }
  ,date_dream: { type : Date }
  ,date_end: { type : Date }
  ,realocate: { type: Boolean }
  ,expired: { type: Boolean }
  ,members_activity :
    [
      {
        id_user : { type : ObjectID }
        ,type_member : { type : String }
        ,notify: { type : Boolean }
      }
    ]
  ,historic:
    [
      { date_realocate: { type : Date } }
    ]
  ,tag:
    [
      { tag_name: { type : String } }
    ]
  ,comment:
    [
      {
        text: { type : String }
        ,date_comment: { type : Date }
        ,member:{
          id_user: { type : ObjectID }
          ,notify: { type : Boolean }
        }

        ,file: {
          path: { type : String }
          ,weight: { type : Number }
          ,name: { type : String }
        }
      }
    ]
}

project: {
  name: { type : String }
  ,description: { type : String }
  ,date_begin: { type : Date }
  ,date_dream: { type : Date }
  ,date_end: { type : Date }
  ,visible: { type : Boolean }
  ,realocate: { type : Boolean }
  ,expired: { type : Boolean }
  ,visualizable_mod: { type : String }
  ,tags:
    [
      { tag_name: { type : String } }
    ]
  ,goals:
    [
      {
        name: { type : String }
        ,description: { type : String }
        ,date_begin: { type : Date }
        ,date_dream: { type : Date }
        ,date_end: { type : Date }
        ,visible: { type : Boolean }
        ,realocate: { type : Boolean }
        ,expired: { type : Boolean }
        ,tags: [
          { tag_name: { type : String } }
        ],
        ,historic: 
        [
          { date_realocate: { type: Date } }
        ]
      }
      ,activities:
        [
          { id_activity : { type : ObjectID} }
        ]
    ]
  ,members:
    [
      {
        id_user: { type : ObjectID }
        ,type_member : { type : String }
        ,notify: { type : Boolean }
      }
    ]
}

user : {
  name: { type : String }
  ,bio: { type : String }
  ,date_register: { type : Date }
  ,avatar_path: { type : String }
  ,auth: {
    username: { type : String }
    ,email: { type : String }
    ,password: { type : String }
    ,last_access: { type : Date }
    ,online: { type: Boolean }
    ,disabled: { type: Boolean }
    ,hash_token: { type : String }
  }
}


function create() {
  var arr = [];

  for (var i = 0; i < 10; i++) {
    arr[i] = {
        name: 'usuario'+i
        ,bio: 'some bio'
        ,date_register: new Date
        ,avatar_path: 'caminho da imagem'+i
        ,auth: {
          username: 'usuario'+i
          ,email: 'usuario'+i+'@gmail.com'
          ,password: '123'+i
          ,last_access: new Date
          ,online: false
          ,disabled: false
          ,hash_token: false
        }
      };
  };
  db.users.save(arr);
};

var projects =
[
  {
    name: 'projeto 1'
    ,description: 'descrição do projeto numero 1'
    ,date_begin: new Date
    ,date_dream: new Date
    ,date_end: new Date
    ,visible: false
    ,realocate: false
    ,expired: false
    ,visualizable_mod: 'yes'
    ,tags:
      [
        'maneiro'
        ,'bacana'
        ,'supimpa'
      ]
    ,goals:
      [
        {
          name: 'meta 1'
          ,description: 'descricao da meta 1'
          ,date_begin: new Date
          ,date_dream: new Date
          ,date_end: new Date
          ,visible: true
          ,realocate: false
          ,expired: false
          ,tags:
            [
              'rapidez'
              ,'agilidade'
              ,'facil'
            ]
          ,historic:
            [
              { date_realocate:  new Date}
            ]
          ,activities:
            [
              {
                "_id": ObjectId("56cc0ab7694907cadd043404")
              }
              ,{
                "_id": ObjectId("56cc0ab7694907cadd043405")
              }

            ]
        }
      ]
    ,members:
      [
        {
          id_user: ObjectId("56c65d3e83398baff5bdfa00")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdfa01")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdfa02")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdfa04")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdf9ff")
          ,type_member : 'senior'
          ,notify: true
        }
      ]
  }
  ,{
    name: 'projeto 2'
    ,description: 'descrição do projeto numero 2'
    ,date_begin: new Date
    ,date_dream: new Date
    ,date_end: new Date
    ,visible: false
    ,realocate: false
    ,expired: false
    ,visualizable_mod: 'yes'
    ,tags:
      [
        'maneiro'
        ,'bacana'
        ,'estupendo'
      ]
    ,goals:
      [
        {
          name: 'meta 1'
          ,description: 'descricao da meta 1'
          ,date_begin: new Date
          ,date_dream: new Date
          ,date_end: new Date
          ,visible: true
          ,realocate: false
          ,expired: false
          ,tags:
            [
              'rapidez'
              ,'agilidade'
              ,'facil'
            ]
          ,historic:
            [
              { date_realocate:  new Date}
            ]
          ,activities:
            [
              {
                "_id": ObjectId("56cc0ab7694907cadd043404")
              }
              ,{
                "_id": ObjectId("56cc0ab7694907cadd043405")
              }
            ]
        }
      ]
    ,members:
      [
        {
          id_user: ObjectId("56c65d3e83398baff5bdfa00")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdfa01")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdfa02")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdfa04")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdf9ff")
          ,type_member : 'senior'
          ,notify: true
        }
      ]
  }
  ,{
    name: 'projeto 3'
    ,description: 'descrição do projeto numero 3'
    ,date_begin: new Date
    ,date_dream: new Date
    ,date_end: new Date
    ,visible: false
    ,realocate: false
    ,expired: false
    ,visualizable_mod: 'yes'
    ,tags:
      [
        'formoso'
        ,'bacana'
        ,'caralhudo'
      ]
    ,goals:
      [
        {
          name: 'meta 1'
          ,description: 'descricao da meta 1'
          ,date_begin: new Date
          ,date_dream: new Date
          ,date_end: new Date
          ,visible: true
          ,realocate: false
          ,expired: false
          ,tags:
            [
              'rapidez'
              ,'agilidade'
              ,'facil'
            ]
          ,historic:
            [
              { date_realocate:  new Date}
            ]
          ,activities:
            [
              {
                "_id": ObjectId("56cc0ab7694907cadd043404")
              }
              ,{
                "_id": ObjectId("56cc0ab7694907cadd043405")
              }
            ]
        }
      ]
    ,members:
      [
        {
          id_user: ObjectId("56c65d3e83398baff5bdf9fb")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdf9fd")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdf9ff")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdfa01")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdfa03")
          ,type_member : 'senior'
          ,notify: true
        }
      ]
  }
  ,{
    name: 'projeto 4'
    ,description: 'descrição do projeto numero 4'
    ,date_begin: new Date
    ,date_dream: new Date
    ,date_end: new Date
    ,visible: false
    ,realocate: false
    ,expired: false
    ,visualizable_mod: 'yes'
    ,tags:
      [
        'gostoso'
        ,'espetacular'
        ,'incrivel'
      ]
    ,goals:
      [
        {
          name: 'meta 1'
          ,description: 'descricao da meta 1'
          ,date_begin: new Date
          ,date_dream: new Date
          ,date_end: new Date
          ,visible: true
          ,realocate: false
          ,expired: false
          ,tags:
            [
              'rapidez'
              ,'agilidade'
              ,'facil'
            ]
          ,historic:
            [
              { date_realocate:  new Date}
            ]
          ,activities:
            [
              {
                "_id": ObjectId("56cc0ab7694907cadd043404")
              }
              ,{
                "_id": ObjectId("56cc0ab7694907cadd043405")
              }
            ]
        }
      ]
    ,members:
      [
        {
          id_user: ObjectId("56c65d3e83398baff5bdfa04")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdfa03")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user:  ObjectId("56c65d3e83398baff5bdfa01")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdf9ff")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdf9fe")
          ,type_member : 'senior'
          ,notify: true
        }
      ]
  }
  ,{
    name: 'projeto 5'
    ,description: 'descrição do projeto numero 5'
    ,date_begin: new Date
    ,date_dream: new Date
    ,date_end: new Date
    ,visible: false
    ,realocate: false
    ,expired: false
    ,visualizable_mod: 'yes'
    ,tags:
      [
        'sensacional'
        ,'amazing'
        ,'spiderman'
      ]
    ,goals:
      [
        {
          name: 'meta 1'
          ,description: 'descricao da meta 1'
          ,date_begin: new Date
          ,date_dream: new Date
          ,date_end: new Date
          ,visible: true
          ,realocate: false
          ,expired: false
          ,tags:
            [
              'rapidez'
              ,'agilidade'
              ,'facil'
            ]
          ,historic:
            [
              { date_realocate:  new Date}
            ]
          ,activities:
            [ ]
        }
      ]
    ,members:
      [
        {
          id_user: ObjectId("56c65d3e83398baff5bdf9fc")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdf9fd")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user:  ObjectId("56c65d3e83398baff5bdf9ff")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdfa01")
          ,type_member : 'senior'
          ,notify: true
        }
        ,{
          id_user: ObjectId("56c65d3e83398baff5bdfa02")
          ,type_member : 'senior'
          ,notify: true
        }
      ]
  }
];



var activity = {
  name: "Varrer o chão"
  ,description: "pegar a vassoura e varrer o chão"
  ,date_begin: new Date
  ,date_dream: new Date
  ,date_end: new Date
  ,realocate: false
  ,expired: false
  ,id_project: ObjectId("56c75b0d575c7e314d6346f4")
  ,goal: "1"
  ,members_activity:
    [
      {
        id_user: ' ObjectId("56c65d3e83398baff5bdfa01")'
        ,type_member: "senior"
        ,notify: true
      }
    ]
  ,historic:
    [
      { date_realocate: new Date }
    ]
  ,tag:
    [
      "rapidez"
    ]
  ,comment:
    [
      {
        text: ""
        ,date_comment: ""
        ,member:{
          id_user: ""
          ,notify: ""
        }
        ,file: {
          path: ""
          ,weight: ""
          ,name: ""
        }
      }
    ]
}


var members = [];
function getMembers(member) {
  members.push(member.id_user);
};
var query = {}
db.projects.findOne(query).members.forEach(getMembers);
db.users.find( { _id : { $not : { $in : members } } },{ name: 1, _id : 0 } );


var query = {}
var fields = {members: 1, _id: 0}
var users = db.projects.find(query, fields).limit(1)



var query = {}
var fields = { name : 1}
db.activities.find(query, fields)




busca

var query  = { name: /projeto 4/i };
var fields = { members: 1, _id: 0 };
db.projects.find(query, fields)

var query = { tags: 'bacana' };
db.projects.find(query)

function goals(){
  var query = {}
  var fields = { goals : 1, _id: 0 }
  var goals = db.projects.find( query, fields )
  var gl = [];
  var activities = [];
  for (var i = 0; i < goals.length(); i++) {
    gl.push = goals[i];

    for(var j = 0; j < gl.length(); j++){
      activities.push(gl[i].activities)
    };
  };
  return activities;
}






Update

var query = {};
var mod = {$set : { views : 0}};
var options = { multi : true};
db.projects.update(query, mod , options);



function updateTag() {
  var tag = ['bom', 'ótimo', 'supimposo', 'maravilhosa', 'formogostoso'];
  var i = 0;
  function upt(proj){
    var query = proj;
    var mod = { $push : {tags : tag[i] } }
    db.projects.update(query,mod);
    i++;
  }
  var query = {};
  db.projects.find(query).forEach(upt);
}


//1 pegar os membros do projeto atual
//2 buscar os membros que não estão no projeto
//3 inserir os dois primeiros membros que não estão no projeto

  //pega o id de todos os usuarios armazena no array users
  /*var users = [];
  function getUsers(user){
    users.push(user._id);
  };
  db.users.find().forEach(getUsers);*/

  //pega o id dos membros do projeto armazena no array members

function updt(proj){
  var members = [];
  function getMembers(member) {
    members.push(member.id_user);
  };
  var query = {}
  proj.members.forEach(getMembers);
  var notIn = [];
  function getNotIn(user){
    notIn.push(user._id);
  };
  db.users.find( { _id : { $not : { $in : members } } } ).forEach(getNotIn);
  function notInUp(elemento){
    var user = {id_user : elemento, notify: true, type_member: "senior" }
    var mod = { $push : { members : user } };
    db.projects.update({name: proj.name},mod);
  };
  notIn.splice(0,2).forEach(notInUp);
}
db.projects.find({}).forEach(updt);



var teste = "";
function updt(proj){
  var members = [];
  function getMembers(member) {
    members.push(member.id_user);
  };
  var query = {}
  proj.members.forEach(getMembers);
  var notIn = [];
  function getNotIn(user){
    notIn.push(user._id);
  };
  db.users.find( { _id : { $not : { $in : members } } } ).forEach(getNotIn);
  function notInUp(elemento){
    teste += elemento;
  };
  notIn.splice(0,2).forEach(notInUp);
}
db.projects.find({}).forEach(updt);


var project = 
{
    name: 'projeto setOnInsert'
    ,description: 'descrição do projeto setOnInsert'
    ,date_begin: new Date
    ,date_dream: new Date
    ,date_end: new Date
    ,visible: false
    ,realocate: false
    ,expired: false
    ,visualizable_mod: 'yes'
    ,tags:
      [
        'gostoso'
        ,'espetacular'
        ,'incrivel'
      ]
    ,goals:
      [
        {
          name: 'meta 1'
          ,description: 'descricao da meta 1'
          ,date_begin: new Date
          ,date_dream: new Date
          ,date_end: new Date
          ,visible: true
          ,realocate: false
          ,expired: false
          ,tags:
            [
              'rapidez'
              ,'agilidade'
              ,'facil'
            ]
          ,historic:
            [
              { date_realocate:  new Date}
            ]
          ,activities:
            [
             
            ]
        }
      ]
    ,members:
      [
        
      ]
  };
var query = { name : /projeto setOnInsert/i};
var mod = { 
  $set : { realocate : true}
  , $setOnInsert : {
    name: 'projeto setOnInsert'
    ,description: 'descrição do projeto setOnInsert'
    ,date_begin: new Date
    ,date_dream: new Date
    ,date_end: new Date
    ,visible: false
    ,expired: false
    ,visualizable_mod: 'yes'
    ,tags:
      [
        'gostoso'
        ,'espetacular'
        ,'incrivel'
      ]
    ,goals:
      [
        {
          name: 'meta 1'
          ,description: 'descricao da meta 1'
          ,date_begin: new Date
          ,date_dream: new Date
          ,date_end: new Date
          ,visible: true
          ,realocate: false
          ,expired: false
          ,tags:
            [
              'rapidez'
              ,'agilidade'
              ,'facil'
            ]
          ,historic:
            [
              { date_realocate:  new Date}
            ]
          ,activities:
            [
             
            ]
        }
      ]
    ,members:
      [
        
      ]
  }
 }
var opt = { upsert : true};
db.projects.update(query,mod, opt);




comments =
      {
        text: "outro comentario muito loco"
        ,date_comment:new Date
        ,member:{
          id_user: ObjectId("56cb8e797cb0fd72a7c50edc")
          ,notify: true
        }

        ,file: {
          path: ""
          ,weight: 0
          ,name: ""
        }
      };
var query = {};
var mod = { $push : { comment : comments } };
var opt = { multi : true }
db.activities.update(query, mod, opt)



delete

var query = { activities : [] };
db.projects.remove(query);

var goals = [];
function remove(){
  function getProj(proj){
    function getGoal(goal){
      goals.push(goal.activities)
      if (goal.activities.length === 0){
        db.projects.remove({name: proj.name});
      }
    };
    db.projects.findOne({name: proj.name}).goals.forEach(getGoal) 
  }
  db.projects.find({}).forEach(getProj)
}
function remove(){ 
  var users = db.users.find({},{ _id: 1 }).skip(3).limit(2)
  var result = db.projects.aggregate (
    [
      {
        $match : {
          $or : [
              { 'members.id_user' : users[0]._id }
              ,{ 'members.id_user' : users[1]._id }
          ]
        }
      }
      ,{ $unwind : '$goals' }
      ,{ $unwind : '$goals.activities' }
      ,{
        $group : {
          _id : null
          ,projects : {
            $push : '$_id'
          }
          , activities : {
            $push : '$goals.activities.id_activity'
          }
        }
      }
    ]
  ).result[0].projects;
  for( i = 0 ; i < result.length; i++){
    db.projects.remove(result[i]);
  };  
}

var users = db.users.find({},{ _id: 1 }).skip(3).limit(2)
var result = db.projects.aggregate (
  [
    {
      $match : {
        $or : [
            { 'members.id_user' : users[0]._id }
            ,{ 'members.id_user' : users[1]._id }
        ]
      }
    }
    ,{ $unwind : '$goals' }
    ,{ $unwind : '$goals.activities' }
    ,{
      $group : {
        _id : null
        ,projects : {
          $push : '$_id'
        }
        , activities : {
          $push : '$goals.activities.id_activity'
        }
      }
    }
  ]
).result[0].projects
db.projects.remove({ _id : { $in : result[0].projects } });


var resultado = db.projects.aggregate(
  [
    { $match : { 'goals.tags' : /rapidez/i } },
    { $unwind :  '$goals' },
    {
      $group : {
        _id : null,
        projects : {
          $push : '$_id'
        }
      }
    }
  ]
)
db.projects.remove({ _id : { $in : resultado.result[0].projects } })


db.projects.aggregate([
        {$match: {'goals.tags': /supimpa/i}},
        {$unwind: "$goals"},
         ])


 {
            $group: {
                _id: null,
                projects: {
                    $push: "$_id"
                }
            }
    }



db.projects.aggregate(
  [
    {
      $match : { name : /projeto 1/i}
    },
    { $unwind : '$goals' },
    {
            $group: {
                _id: null,
                projects: {
                    $push: "$_id"
                },
                goals : {
                  $push : "$goals.name"
                }
            }
    }
  ]
)


var user = { createUser: "PauloLeituraEscrita",
  pwd: "123",
  roles: [
    { role: "readWrite", db: "be-mean-mongo" }
  ]
}
db.createUser(user);


db.runCommand({ grantRolesToUser : "PauloLeituraEscrita",
      roles : [ "grantRolesToUser", "revokeRole"]
});
db.runCommand({ usersInfo: { user: "PauloLeituraEscrita", db: "be-mean-mongo" }})

 db.runCommand( { revokeRolesFromUser: "PauloLeituraEscrita",
  roles: [
          { role: "revokeRole", db: "be-mean-mongo" },
  ]
 })



 db.runCommand({
  createRole: "revokeRole",
  privileges : [
    { resource : { db : "be-mean-mongo", collection : "" }, actions : [ "revokeRole" ]}
  ],
  roles : []
 })