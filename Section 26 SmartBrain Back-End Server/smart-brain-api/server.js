const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const app = express();
const knex = require('knex');


const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'fast',
      database : 'smart-brain'
    }
  });

db.select('*').from('users').then(data => {
    console.log(data);
})

app.use(bodyParser.json());
app.use(cors());


const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email:'john@gmail.com',
            password:'cookies',
            entries:'0',
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email:'sally@gmail.com',
            password:'bananas',
            entries:'0',
            joined: new Date()
        }
    ]
}

app.get('/', (req,res) => {
    res.send(database.users);
})

app.post('/signin', (req,res) => {
    const {email,password} = req.body;

    db.select('email','hash').from('login')
    .where('email', '=', email)
    .then(data => {
        const isValid  = bcrypt.compareSync(password, data[0].hash);
        console.log(isValid);
        if(isValid){
            return db.select('*').from('users')
            .where('email', '=', email)
            .then(user => {
                console.log(user);
                res.json(user[0]);
            })
            .catch(err => res.status(400).json('unable to get user'));
        }
        else{
            res.status(400).json('wrong credentials');
        }
    })
    .catch(err => res.status(400).json('wrong credentials'));
})

app.get('/profile/:id', (req,res) => {
    const {id} = req.params;
    db.select('*').from('users').where({id:id})
    .then(user => {
        if (user.length){
            res.json(user[0]);
        }
        else{
            res.status(400).json("user not found!");
        }
    })
    .catch(err => {
        res.status(400).json("error getting user!");
    })
})

app.put('/image', (req,res) => {
    const {id} = req.body;
    
    db('users').where('id', '=', id)
    .increment('entries',1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0].entries);
    })
    .catch(err => {
        res.status(400).json("unable to get entries!");
    })
})

app.post('/register', (req,res) => {
    
    const {name,email,password} = req.body;

    const hash = bcrypt.hashSync(password);

    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
            .returning('*')
            .insert({
                email:loginEmail[0].email,
                name: name,
                joined: new Date()
            }).then(user => {
                res.json(user[0]);
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'));
    
})

app.listen(3000, ()=>{
    console.log("App is running");
})

/*
res = this is working
signin --> post
register --> post = user
/profile/:userId --> GET = user
/image --> Put --> user
*/