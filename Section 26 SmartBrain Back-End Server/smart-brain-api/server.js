const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const app = express();
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

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

app.get('/profile/:id', (req,res) => {profile.handleProfileGet(req,res,db)});
 
app.put('/image', (req,res) => {image.handleImage(req,res,db)});

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