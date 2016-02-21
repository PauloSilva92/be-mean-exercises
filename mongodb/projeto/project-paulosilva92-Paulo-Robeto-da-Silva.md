# MongoDb - Projeto Final
**Autor:** Paulo Roberto da Silva
**Data** Date.now() //em timestamp

## Para qual sistema você usaria o MogoDB (diferente desse)?

## Qual a modelagem da sua coleção de `users`?

```js
user : {
  name: { type : String }
  ,bio: { type : String }
  ,date-register: { type : Date }
  ,avatar-path: { type : String }
  ,auth: {
    username: { type : String }
    ,email: { type : String }
    ,password: { type : String }
    ,last-access: { type : Date }
    ,online: { type: Boolean }
    ,disabled: { type: Boolean }
    ,hash-token: { type : String }
  }
}
```

## Qual a modelagem da sua coleção de `projects`?

```js
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
        ,historic: [
          { date_realocate: { type: Date } }
        ]
      }
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
```

## Qual a modelagem da sua coleção retirada de `projects`?

```js
activity: {
  name: { type : String },
  ,description: { type : String }
  ,date_begin: { type : Date }
  ,date_dream: { type : Date }
  ,date_end: { type : Date }
  ,realocate: { type : Boolean }
  ,expired: { type : Boolean }
  ,id_project: { type : ObjectID }
  ,goal: { type : String }
  ,members-activity :
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
      { id_tag: { type : ObjectID } }
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
```

## Create - cadastro

### Cadastre 10 usuários diferentes

```js
paulo(mongod-3.2.3) be-mean-mongo> function create() {
...   var arr = [];
...   for (var i = 0; i < 10; i++) {
...     arr[i] = {
...         name: 'usuario'+i
...         ,bio: 'some bio'
...         ,date_register: new Date
...         ,avatar_path: 'caminho da imagem'+i
...         ,auth: {
...           username: 'usuario'+i
...           ,email: 'usuario'+i+'@gmail.com'
...           ,password: '123'+i
...           ,last_access: new Date
...           ,online: false
...           ,disabled: false
...           ,hash_token: false
...         }
...       };
...   };
...   db.users.save(arr);
... };
paulo(mongod-3.2.3) be-mean-mongo> create()
Inserted 1 record(s) in 2547ms
paulo(mongod-3.2.3) be-mean-mongo> db.users.find()
{
  "_id": ObjectId("56c65d3e83398baff5bdf9fb"),
  "name": "usuario0",
  "bio": "some bio",
  "date_register": ISODate("2016-02-19T00:09:33.700Z"),
  "avatar_path": "caminho da imagem0",
  "auth": {
    "username": "usuario0",
    "email": "usuario0@gmail.com",
    "password": "1230",
    "last_access": ISODate("2016-02-19T00:09:33.700Z"),
    "online": false,
    "disabled": false,
    "hash_token": false
  }
}
{
  "_id": ObjectId("56c65d3e83398baff5bdf9fc"),
  "name": "usuario1",
  "bio": "some bio",
  "date_register": ISODate("2016-02-19T00:09:33.700Z"),
  "avatar_path": "caminho da imagem1",
  "auth": {
    "username": "usuario1",
    "email": "usuario1@gmail.com",
    "password": "1231",
    "last_access": ISODate("2016-02-19T00:09:33.700Z"),
    "online": false,
    "disabled": false,
    "hash_token": false
  }
}
{
  "_id": ObjectId("56c65d3e83398baff5bdf9fd"),
  "name": "usuario2",
  "bio": "some bio",
  "date_register": ISODate("2016-02-19T00:09:33.700Z"),
  "avatar_path": "caminho da imagem2",
  "auth": {
    "username": "usuario2",
    "email": "usuario2@gmail.com",
    "password": "1232",
    "last_access": ISODate("2016-02-19T00:09:33.700Z"),
    "online": false,
    "disabled": false,
    "hash_token": false
  }
}
{
  "_id": ObjectId("56c65d3e83398baff5bdf9fe"),
  "name": "usuario3",
  "bio": "some bio",
  "date_register": ISODate("2016-02-19T00:09:33.700Z"),
  "avatar_path": "caminho da imagem3",
  "auth": {
    "username": "usuario3",
    "email": "usuario3@gmail.com",
    "password": "1233",
    "last_access": ISODate("2016-02-19T00:09:33.700Z"),
    "online": false,
    "disabled": false,
    "hash_token": false
  }
}
{
  "_id": ObjectId("56c65d3e83398baff5bdf9ff"),
  "name": "usuario4",
  "bio": "some bio",
  "date_register": ISODate("2016-02-19T00:09:33.700Z"),
  "avatar_path": "caminho da imagem4",
  "auth": {
    "username": "usuario4",
    "email": "usuario4@gmail.com",
    "password": "1234",
    "last_access": ISODate("2016-02-19T00:09:33.700Z"),
    "online": false,
    "disabled": false,
    "hash_token": false
  }
}
{
  "_id": ObjectId("56c65d3e83398baff5bdfa00"),
  "name": "usuario5",
  "bio": "some bio",
  "date_register": ISODate("2016-02-19T00:09:33.700Z"),
  "avatar_path": "caminho da imagem5",
  "auth": {
    "username": "usuario5",
    "email": "usuario5@gmail.com",
    "password": "1235",
    "last_access": ISODate("2016-02-19T00:09:33.700Z"),
    "online": false,
    "disabled": false,
    "hash_token": false
  }
}
{
  "_id": ObjectId("56c65d3e83398baff5bdfa01"),
  "name": "usuario6",
  "bio": "some bio",
  "date_register": ISODate("2016-02-19T00:09:33.700Z"),
  "avatar_path": "caminho da imagem6",
  "auth": {
    "username": "usuario6",
    "email": "usuario6@gmail.com",
    "password": "1236",
    "last_access": ISODate("2016-02-19T00:09:33.700Z"),
    "online": false,
    "disabled": false,
    "hash_token": false
  }
}
{
  "_id": ObjectId("56c65d3e83398baff5bdfa02"),
  "name": "usuario7",
  "bio": "some bio",
  "date_register": ISODate("2016-02-19T00:09:33.700Z"),
  "avatar_path": "caminho da imagem7",
  "auth": {
    "username": "usuario7",
    "email": "usuario7@gmail.com",
    "password": "1237",
    "last_access": ISODate("2016-02-19T00:09:33.700Z"),
    "online": false,
    "disabled": false,
    "hash_token": false
  }
}
{
  "_id": ObjectId("56c65d3e83398baff5bdfa03"),
  "name": "usuario8",
  "bio": "some bio",
  "date_register": ISODate("2016-02-19T00:09:33.700Z"),
  "avatar_path": "caminho da imagem8",
  "auth": {
    "username": "usuario8",
    "email": "usuario8@gmail.com",
    "password": "1238",
    "last_access": ISODate("2016-02-19T00:09:33.700Z"),
    "online": false,
    "disabled": false,
    "hash_token": false
  }
}
{
  "_id": ObjectId("56c65d3e83398baff5bdfa04"),
  "name": "usuario9",
  "bio": "some bio",
  "date_register": ISODate("2016-02-19T00:09:33.717Z"),
  "avatar_path": "caminho da imagem9",
  "auth": {
    "username": "usuario9",
    "email": "usuario9@gmail.com",
    "password": "1239",
    "last_access": ISODate("2016-02-19T00:09:33.717Z"),
    "online": false,
    "disabled": false,
    "hash_token": false
  }
}
Fetched 10 record(s) in 789ms

```

### cadastre 5 projetos diferentes
```js
paulo(mongod-3.2.3) be-mean-mongo> var projects = [
...   {
...     name: 'projeto 1'
...     ,description: 'descrição do projeto numero 1'
...     ,date_begin: new Date
...     ,date_dream: new Date
...     ,date_end: new Date
...     ,visible: false
...     ,realocate: false
...     ,expired: false
...     ,visualizable_mod: 'yes'
...     ,tags:
...       [
...         'maneiro'
...         ,'bacana'
...         ,'supimpa'
...       ]
...     ,goals:
...       [
...         {
...           name: 'meta 1'
...           ,description: 'descricao da meta 1'
...           ,date_begin: new Date
...           ,date_dream: new Date
...           ,date_end: new Date
...           ,visible: true
...           ,realocate: false
...           ,expired: false
...           ,tags:
...             [
...               'rapidez'
...               ,'agilidade'
...               ,'facil'
...             ]
...           ,historic:
...             [
...               { date_realocate:  new Date}
...             ]
...         }
...       ]
...     ,members:
...       [
...         {
...           id_user: ObjectId("56c65d3e83398baff5bdfa00")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdfa01")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdfa02")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdfa04")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdf9ff")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...       ]
...   }
...   ,{
...     name: 'projeto 2'
...     ,description: 'descrição do projeto numero 2'
...     ,date_begin: new Date
...     ,date_dream: new Date
...     ,date_end: new Date
...     ,visible: false
...     ,realocate: false
...     ,expired: false
...     ,visualizable_mod: 'yes'
...     ,tags:
...       [
...         'maneiro'
...         ,'bacana'
...         ,'estupendo'
...       ]
...     ,goals:
...       [
...         {
...           name: 'meta 1'
...           ,description: 'descricao da meta 1'
...           ,date_begin: new Date
...           ,date_dream: new Date
...           ,date_end: new Date
...           ,visible: true
...           ,realocate: false
...           ,expired: false
...           ,tags:
...             [
...               'rapidez'
...               ,'agilidade'
...               ,'facil'
...             ]
...           ,historic:
...             [
...               { date_realocate:  new Date}
...             ]
...         }
...       ]
...     ,members:
...       [
...         {
...           id_user: ObjectId("56c65d3e83398baff5bdfa00")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdfa01")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdfa02")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdfa04")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdf9ff")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...       ]
...   }
...   ,{
...     name: 'projeto 3'
...     ,description: 'descrição do projeto numero 3'
...     ,date_begin: new Date
...     ,date_dream: new Date
...     ,date_end: new Date
...     ,visible: false
...     ,realocate: false
...     ,expired: false
...     ,visualizable_mod: 'yes'
...     ,tags:
...       [
...         'formoso'
...         ,'bacana'
...         ,'caralhudo'
...       ]
...     ,goals:
...       [
...         {
...           name: 'meta 1'
...           ,description: 'descricao da meta 1'
...           ,date_begin: new Date
...           ,date_dream: new Date
...           ,date_end: new Date
...           ,visible: true
...           ,realocate: false
...           ,expired: false
...           ,tags:
...             [
...               'rapidez'
...               ,'agilidade'
...               ,'facil'
...             ]
...           ,historic:
...             [
...               { date_realocate:  new Date}
...             ]
...         }
...       ]
...     ,members:
...       [
...         {
...           id_user: ObjectId("56c65d3e83398baff5bdf9fb")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdf9fd")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdf9ff")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdfa01")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdfa03")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...       ]
...   }
...   ,{
...     name: 'projeto 4'
...     ,description: 'descrição do projeto numero 4'
...     ,date_begin: new Date
...     ,date_dream: new Date
...     ,date_end: new Date
...     ,visible: false
...     ,realocate: false
...     ,expired: false
...     ,visualizable_mod: 'yes'
...     ,tags:
...       [
...         'gostoso'
...         ,'espetacular'
...         ,'incrivel'
...       ]
...     ,goals:
...       [
...         {
...           name: 'meta 1'
...           ,description: 'descricao da meta 1'
...           ,date_begin: new Date
...           ,date_dream: new Date
...           ,date_end: new Date
...           ,visible: true
...           ,realocate: false
...           ,expired: false
...           ,tags:
...             [
...               'rapidez'
...               ,'agilidade'
...               ,'facil'
...             ]
...           ,historic:
...             [
...               { date_realocate:  new Date}
...             ]
...         }
...       ]
...     ,members:
...       [
...         {
...           id_user: ObjectId("56c65d3e83398baff5bdfa04")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdfa03")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user:  ObjectId("56c65d3e83398baff5bdfa01")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdf9ff")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdf9fe")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...       ]
...   }
...   ,{
...     name: 'projeto 5'
...     ,description: 'descrição do projeto numero 5'
...     ,date_begin: new Date
...     ,date_dream: new Date
...     ,date_end: new Date
...     ,visible: false
...     ,realocate: false
...     ,expired: false
...     ,visualizable_mod: 'yes'
...     ,tags:
...       [
...         'sensacional'
...         ,'amazing'
...         ,'spiderman'
...       ]
...     ,goals:
...       [
...         {
...           name: 'meta 1'
...           ,description: 'descricao da meta 1'
...           ,date_begin: new Date
...           ,date_dream: new Date
...           ,date_end: new Date
...           ,visible: true
...           ,realocate: false
...           ,expired: false
...           ,tags:
...             [
...               'rapidez'
...               ,'agilidade'
...               ,'facil'
...             ]
...           ,historic:
...             [
...               { date_realocate:  new Date}
...             ]
...         }
...       ]
...     ,members:
...       [
...         {
...           id_user: ObjectId("56c65d3e83398baff5bdf9fc")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdf9fd")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user:  ObjectId("56c65d3e83398baff5bdf9ff")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdfa01")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...         ,{
...           id_user: ObjectId("56c65d3e83398baff5bdfa02")
...           ,type_member : 'senior'
...           ,notify: true
...         }
...       ]
...   }
... ];
paulo(mongod-3.2.3) be-mean-mongo> db.projects.insert(projects)
Inserted 1 record(s) in 248ms
BulkWriteResult({
  "writeErrors": [ ],
  "writeConcernErrors": [ ],
  "nInserted": 5,
  "nUpserted": 0,
  "nMatched": 0,
  "nModified": 0,
  "nRemoved": 0,
  "upserted": [ ]
})
```

## Retrieve - busca

### Liste as informações dos membros de 1 projeto especifico que deve ser buscado pelo seu nome de forma a não ligar para maiúsculas e minúsculas

```js
paulo(mongod-3.2.3) be-mean-mongo> var query  = { name: /projeto 4/i };
paulo(mongod-3.2.3) be-mean-mongo> var fields = { members: 1, _id: 0 };
paulo(mongod-3.2.3) be-mean-mongo> db.projects.find(query, fields)
{
  "members": [
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa04"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa03"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa01"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdf9ff"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdf9fe"),
      "type_member": "senior",
      "notify": true
    }
  ]
}
Fetched 1 record(s) in 3ms
```

### Liste todos os projetos com a tag que voce escolheu para os 3 projetos em comum

```js
paulo-STI-NI-1401(mongod-3.2.3) be-mean-mongo> var query = { tags: 'bacana' };
paulo-STI-NI-1401(mongod-3.2.3) be-mean-mongo> db.projects.find(query)
{
  "_id": ObjectId("56c8945aede090a4e26b8da2"),
  "name": "projeto 1",
  "description": "descrição do projeto numero 1",
  "date_begin": ISODate("2016-02-20T16:29:00.191Z"),
  "date_dream": ISODate("2016-02-20T16:29:00.191Z"),
  "date_end": ISODate("2016-02-20T16:29:00.191Z"),
  "visible": false,
  "realocate": false,
  "expired": false,
  "visualizable_mod": "yes",
  "tags": [
    "maneiro",
    "bacana",
    "supimpa"
  ],
  "goals": [
    {
      "name": "meta 1",
      "description": "descricao da meta 1",
      "date_begin": ISODate("2016-02-20T16:29:00.191Z"),
      "date_dream": ISODate("2016-02-20T16:29:00.191Z"),
      "date_end": ISODate("2016-02-20T16:29:00.191Z"),
      "visible": true,
      "realocate": false,
      "expired": false,
      "tags": [
        "rapidez",
        "agilidade",
        "facil"
      ],
      "historic": [
        {
          "date_realocate": ISODate("2016-02-20T16:29:00.191Z")
        }
      ]
    }
  ],
  "members": [
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa00"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa01"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa02"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa04"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdf9ff"),
      "type_member": "senior",
      "notify": true
    }
  ]
}
{
  "_id": ObjectId("56c8945aede090a4e26b8da3"),
  "name": "projeto 2",
  "description": "descrição do projeto numero 2",
  "date_begin": ISODate("2016-02-20T16:29:00.191Z"),
  "date_dream": ISODate("2016-02-20T16:29:00.191Z"),
  "date_end": ISODate("2016-02-20T16:29:00.191Z"),
  "visible": false,
  "realocate": false,
  "expired": false,
  "visualizable_mod": "yes",
  "tags": [
    "maneiro",
    "bacana",
    "estupendo"
  ],
  "goals": [
    {
      "name": "meta 1",
      "description": "descricao da meta 1",
      "date_begin": ISODate("2016-02-20T16:29:00.191Z"),
      "date_dream": ISODate("2016-02-20T16:29:00.191Z"),
      "date_end": ISODate("2016-02-20T16:29:00.191Z"),
      "visible": true,
      "realocate": false,
      "expired": false,
      "tags": [
        "rapidez",
        "agilidade",
        "facil"
      ],
      "historic": [
        {
          "date_realocate": ISODate("2016-02-20T16:29:00.191Z")
        }
      ]
    }
  ],
  "members": [
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa00"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa01"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa02"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa04"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdf9ff"),
      "type_member": "senior",
      "notify": true
    }
  ]
}
{
  "_id": ObjectId("56c8945aede090a4e26b8da4"),
  "name": "projeto 3",
  "description": "descrição do projeto numero 3",
  "date_begin": ISODate("2016-02-20T16:29:00.191Z"),
  "date_dream": ISODate("2016-02-20T16:29:00.191Z"),
  "date_end": ISODate("2016-02-20T16:29:00.191Z"),
  "visible": false,
  "realocate": false,
  "expired": false,
  "visualizable_mod": "yes",
  "tags": [
    "formoso",
    "bacana",
    "caralhudo"
  ],
  "goals": [
    {
      "name": "meta 1",
      "description": "descricao da meta 1",
      "date_begin": ISODate("2016-02-20T16:29:00.191Z"),
      "date_dream": ISODate("2016-02-20T16:29:00.191Z"),
      "date_end": ISODate("2016-02-20T16:29:00.191Z"),
      "visible": true,
      "realocate": false,
      "expired": false,
      "tags": [
        "rapidez",
        "agilidade",
        "facil"
      ],
      "historic": [
        {
          "date_realocate": ISODate("2016-02-20T16:29:00.191Z")
        }
      ]
    }
  ],
  "members": [
    {
      "id_user": ObjectId("56c65d3e83398baff5bdf9fb"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdf9fd"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdf9ff"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa01"),
      "type_member": "senior",
      "notify": true
    },
    {
      "id_user": ObjectId("56c65d3e83398baff5bdfa03"),
      "type_member": "senior",
      "notify": true
    }
  ]
}
Fetched 3 record(s) in 10ms
```

### Liste apenas os nomes de todas as atividades para todos os projetos

```js
paulo(mongod-3.2.3) be-mean-mongo> var query = {}
paulo(mongod-3.2.3) be-mean-mongo> var fields = { name : 1}
paulo(mongod-3.2.3) be-mean-mongo> db.activities.find(query, fields)
{
  "_id": ObjectId("56c761a2575c7e314d6346f7"),
  "name": "Varrer o chão"
}
Fetched 1 record(s) in 1ms
```

### Liste todos os projetos que não possuam uma tag.

```js
paulo-STI-NI-1401(mongod-3.2.3) be-mean-mongo> var query = { tags : [] }
paulo-STI-NI-1401(mongod-3.2.3) be-mean-mongo> db.projects.find(query)
Fetched 0 record(s) in 1ms
```

### Liste todos os usuários que não fazem parte do primeiro projeto cadastrado.

```js
paulo(mongod-3.2.3) be-mean-mongo> var members = [];
paulo(mongod-3.2.3) be-mean-mongo> function getMembers(member) {
...   members.push(member.id_user);
... };
paulo(mongod-3.2.3) be-mean-mongo> var query = {}
paulo(mongod-3.2.3) be-mean-mongo> db.projects.findOne(query).members.forEach(getMembers);
paulo(mongod-3.2.3) be-mean-mongo> db.users.find( { _id : { $not : { $in : members } } },{ name: 1, _id : 0 } );
{
  "name": "usuario0"
}
{
  "name": "usuario1"
}
{
  "name": "usuario2"
}
{
  "name": "usuario3"
}
{
  "name": "usuario8"
}
Fetched 5 record(s) in 2ms
```
## Update - alteração

### Adicione para todos os projetos o campo views: 0.

```js
paulo-STI-NI-1401(mongod-3.2.3) be-mean-mongo> var query = {};
paulo-STI-NI-1401(mongod-3.2.3) be-mean-mongo> var mod = {$set : { views : 0}};
paulo-STI-NI-1401(mongod-3.2.3) be-mean-mongo> var options = { multi : true};
paulo-STI-NI-1401(mongod-3.2.3) be-mean-mongo> db.projects.update(query, mod , options);
Updated 5 existing record(s) in 1ms
WriteResult({
  "nMatched": 5,
  "nUpserted": 0,
  "nModified": 5
})
```

### Adicione 1 tag diferente para cada projeto.

```js
paulo-STI-NI-1401(mongod-3.2.3) be-mean-mongo> function updateTag() {
...   var tag = ['bom', 'ótimo', 'supimposo', 'maravilhosa', 'formogostoso'];
...   var i = 0;
...   function upt(proj){
...     var query = proj;
...     var mod = { $push : {tags : tag[i] } }
...     db.projects.update(query,mod);
...     i++;
...   }
...   var query = {};
...   db.projects.find(query).forEach(upt);
... }
paulo-STI-NI-1401(mongod-3.2.3) be-mean-mongo> updateTag()
Updated 1 existing record(s) in 4ms
Updated 1 existing record(s) in 2ms
Updated 1 existing record(s) in 2ms
Updated 1 existing record(s) in 2ms
Updated 1 existing record(s) in 2ms
```

### Adicione 2 membros diferentes para cada projeto.

```js
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> function updt(proj){
...   var members = [];
...   function getMembers(member) {
...     members.push(member.id_user);
...   };
...   var query = {}
...   proj.members.forEach(getMembers);
...   var notIn = [];
...   function getNotIn(user){
...     notIn.push(user._id);
...   };
...   db.users.find( { _id : { $not : { $in : members } } } ).forEach(getNotIn);
...   function notInUp(elemento){
...     var user = {id_user : elemento, notify: true, type_member: "senior" }
...     var mod = { $push : { members : user } };
...     db.projects.update({name: proj.name},mod);
...   };
...   notIn.splice(0,2).forEach(notInUp);
... }
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> db.projects.find({}).forEach(updt);
Updated 1 existing record(s) in 746ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 2ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
```

## Delete - remoção

## Sharding
// coloque aqui todos os comandos que você executou

## Replica
// coloque aqui todos os comandos que você executou
