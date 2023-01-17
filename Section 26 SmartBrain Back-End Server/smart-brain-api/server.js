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
    bcrypt.compare("apples", '$2a$10$6tnebnbteIDU5Mjg2A4FF.n1ylNsTnABvCQMc39yCc9Z6kBfqzvky', function(err, res) {
        console.log("first guess", res);
    });
    bcrypt.compare("veggies", '$2a$10$6tnebnbteIDU5Mjg2A4FF.n1ylNsTnABvCQMc39yCc9Z6kBfqzvky', function(err, res) {
        console.log("second guess" , res);
    });
    

    if(req.body.email === database.users[0].email
        && req.body.password === database.users[0].password
    ){
        res.json(database.users[0]);
    }
    else{
        res.status(400).json('error logging in');
    }
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