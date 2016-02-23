# MongoDb - Projeto Final
**Autor:** Paulo Roberto da Silva
**Data** Date.now() //em timestamp


## Para qual sistema você usaria o MogoDB (diferente desse)?

O MongoDb é perfeito pra sistemas que possuem grande processamento de dados não-relacionados entre si. Banco de dados de supermercados onde serão guardadas as notas fiscais ou os preços e dados dos produtos seria uma boa utilização.

## Qual a modelagem da sua coleção de `users`?

```js
user : {
  name: { type : String }
  ,bio: { type : String }
  ,date_register: { type : Date }
  ,avatar_path: { type : String }
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
        ,historic: 
        [
          { date_realocate: { type: Date } }
        ]
      }
      ,activities:
        [
          id_activity : { type : ObjectID}
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
```

## Qual a modelagem da sua coleção retirada de `projects`?

Foi escolhida a parte de atividades para ser criada uma collection unica por ela ser grande e como um projeto pode ter muitas metas e cada meta muitas atividades, isso pode tornar o documento a ser salvo grande demais para o limite de 16 MB que o MongoDB suporta.

```js
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
```

## Create - cadastro

### 1. Cadastre 10 usuários diferentes.

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

### 2. Cadastre 5 projetos diferentes.

```js
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var projects =
... [
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
...           ,activities:
...             [
...               {
...                 "_id": ObjectId("56cc0ab7694907cadd043404")
...               }
...               ,{
...                 "_id": ObjectId("56cc0ab7694907cadd043405")
...               }
... 
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
            }
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
   .              ,'facil'
...             ]
...           ,historic:
...             [
...               { date_realocate:  new Date}
...             ]
...           ,activities:
...             [
...               {
...                 "_id": ObjectId("56cc0ab7694907cadd043404")
...               }
...               ,{
...                 "_id": ObjectId("56cc0ab7694907cadd043405")
...               }
...             ]
...         }
...       ]
...     ,members:
 tru      [
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
aliz        }
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
...           ,activities:
...             [
...               {
...                 "_id": ObjectId("56cc0ab7694907cadd043404")
...               }
...               ,{
...                 "_id": ObjectId("56cc0ab7694907cadd043405")
...               }
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
...           ,activities:
...             [
...               {
...                 "_id": ObjectId("56cc0ab7694907cadd043404")
...               }
...               ,{
...                 "_id": ObjectId("56cc0ab7694907cadd043405")
...               }
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
...           ,activities:
...             [ ]
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
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> db.projects.insert(projects)
Inserted 1 record(s) in 196ms
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

### 1. Liste as informações dos membros de 1 projeto especifico que deve ser buscado pelo seu nome de forma a não ligar para maiúsculas e minúsculas

```js
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo>  var query  = { name: /projeto 4/i };
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var fields = { members: 1, _id: 0 };
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> db.projects.find(query, fields)
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
Fetched 1 record(s) in 4ms
```

### 2. Liste todos os projetos com a tag que voce escolheu para os 3 projetos em comum

```js
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var query = { tags: 'bacana' };
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> db.projects.find(query)
{
  "_id": ObjectId("56cc0b6783bfa35d1a884d03"),
  "name": "projeto 1",
  "description": "descrição do projeto numero 1",
  "date_begin": ISODate("2016-02-23T07:33:42.624Z"),
  "date_dream": ISODate("2016-02-23T07:33:42.624Z"),
  "date_end": ISODate("2016-02-23T07:33:42.624Z"),
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
      "date_begin": ISODate("2016-02-23T07:33:42.624Z"),
      "date_dream": ISODate("2016-02-23T07:33:42.624Z"),
      "date_end": ISODate("2016-02-23T07:33:42.624Z"),
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
          "date_realocate": ISODate("2016-02-23T07:33:42.624Z")
        }
      ],
      "activities": [
        {
          "_id": ObjectId("56cc0ab7694907cadd043404")
        },
        {
          "_id": ObjectId("56cc0ab7694907cadd043405")
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
  "_id": ObjectId("56cc0b6783bfa35d1a884d04"),
  "name": "projeto 2",
  "description": "descrição do projeto numero 2",
  "date_begin": ISODate("2016-02-23T07:33:42.624Z"),
  "date_dream": ISODate("2016-02-23T07:33:42.624Z"),
  "date_end": ISODate("2016-02-23T07:33:42.624Z"),
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
      "date_begin": ISODate("2016-02-23T07:33:42.624Z"),
      "date_dream": ISODate("2016-02-23T07:33:42.624Z"),
      "date_end": ISODate("2016-02-23T07:33:42.624Z"),
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
          "date_realocate": ISODate("2016-02-23T07:33:42.624Z")
        }
      ],
      "activities": [
        {
          "_id": ObjectId("56cc0ab7694907cadd043404")
        },
        {
          "_id": ObjectId("56cc0ab7694907cadd043405")
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
  "_id": ObjectId("56cc0b6783bfa35d1a884d05"),
  "name": "projeto 3",
  "description": "descrição do projeto numero 3",
  "date_begin": ISODate("2016-02-23T07:33:42.624Z"),
  "date_dream": ISODate("2016-02-23T07:33:42.624Z"),
  "date_end": ISODate("2016-02-23T07:33:42.624Z"),
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
      "date_begin": ISODate("2016-02-23T07:33:42.624Z"),
      "date_dream": ISODate("2016-02-23T07:33:42.624Z"),
      "date_end": ISODate("2016-02-23T07:33:42.624Z"),
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
          "date_realocate": ISODate("2016-02-23T07:33:42.624Z")
        }
      ],
      "activities": [
        {
          "_id": ObjectId("56cc0ab7694907cadd043404")
        },
        {
          "_id": ObjectId("56cc0ab7694907cadd043405")
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
Fetched 3 record(s) in 7ms
```

### 3. Liste apenas os nomes de todas as atividades para todos os projeto

```js
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var query = {}
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var fields = { name : 1}
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> db.activities.find(query, fields)
{
  "_id": ObjectId("56cc0ab7694907cadd043404"),
  "name": "atividade 1"
}
{
  "_id": ObjectId("56cc0ab7694907cadd043405"),
  "name": "atividade 2"
}
Fetched 2 record(s) in 3ms
```

### 4. Liste todos os projetos que não possuam uma tag.

```js
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var query = { tags : [] }
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> db.projects.find(query)
Fetched 0 record(s) in 1ms
```

### 5. Liste todos os usuários que não fazem parte do primeiro projeto cadastrado.

```js
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var members = [];
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> function getMembers(member) {
...   members.push(member.id_user);
... };
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var query = {}
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> db.projects.findOne(query).members.forEach(getMembers);
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> db.users.find( { _id : { $not : { $in : members } } },{ name: 1, _id : 0 } );
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
Fetched 5 record(s) in 4ms
```

## Update - alteração

### 1. Adicione para todos os projetos o campo views: 0.

```js
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var query = {};
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var mod = {$set : { views : 0}};
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var options = { multi : true};
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> db.projects.update(query, mod , options);
Updated 5 existing record(s) in 3ms
WriteResult({
  "nMatched": 5,
  "nUpserted": 0,
  "nModified": 5
})
```

### 2. Adicione 1 tag diferente para cada projeto.

```js
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> function updateTag() {
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
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> updateTag()
Updated 1 existing record(s) in 2ms
Updated 1 existing record(s) in 2ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 3ms
Updated 1 existing record(s) in 2ms
```

### 3. Adicione 2 membros diferentes para cada projeto.

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
Updated 1 existing record(s) in 2ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 2ms
Updated 1 existing record(s) in 3ms
Updated 1 existing record(s) in 2ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
```

### 4. Adicione 1 comentário em cada atividade, deixe apenas 1 projeto sem.

```js
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> comments =
...       {
...         text: "outro comentario muito loco"
...         ,date_comment:new Date
...         ,member:{
...           id_user: ObjectId("56cb8e797cb0fd72a7c50edc")
...           ,notify: true
...         }
... 
...         ,file: {
...           path: ""
...           ,weight: 0
...           ,name: ""
...         }
...       };
{
  "text": "outro comentario muito loco",
  "date_comment": ISODate("2016-02-23T08:03:03.612Z"),
  "member": {
    "id_user": ObjectId("56cb8e797cb0fd72a7c50edc"),
    "notify": true
  },
  "file": {
    "path": "",
    "weight": 0,
    "name": ""
  }
}
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var query = {};
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var mod = { $push : { comment : comments } };
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var opt = { multi : true }
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> db.activities.update(query, mod, opt)
Updated 2 existing record(s) in 2ms
WriteResult({
  "nMatched": 2,
  "nUpserted": 0,
  "nModified": 2
})
```

### 5. Adicione 1 projeto inteiro com UPSERT.

```js
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var query = { name : /projeto setOnInsert/i};
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var mod = { 
...   $set : { realocate : true}
...   , $setOnInsert : {
...     name: 'projeto setOnInsert'
...     ,description: 'descrição do projeto setOnInsert'
...     ,date_begin: new Date
...     ,date_dream: new Date
...     ,date_end: new Date
...     ,visible: false
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
...           ,activities:
...             [
...              
...             ]
...         }
...       ]
...     ,members:
...       [
...         
...       ]
...   }
...  }
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> var opt = { upsert : true};
paulo-sti-ni-1401(mongod-3.2.3) be-mean-mongo> db.projects.update(query,mod, opt);
Updated 1 new record(s) in 2ms
WriteResult({
  "nMatched": 0,
  "nUpserted": 1,
  "nModified": 0,
  "_id": ObjectId("56cc1cb879c4e7a3cefd119d")
})
```

## Delete - remoção

## Sharding
// coloque aqui todos os comandos que você executou

## Replica
// coloque aqui todos os comandos que você executou