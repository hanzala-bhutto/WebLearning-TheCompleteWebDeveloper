const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const app = express();
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');

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

app.get('/', (req,res) => {
    res.send('success');
})

app.post('/signin', (req,res) => {signin.handleSignin(req,res,db,bcrypt)});

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

app.post('/register', (req,res) => {register.handleRegister(req,res,db,bcrypt)});

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