const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const app = express();
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
        res.json('success');
    }
    else{
        res.status(400).json('error logging in');
    }
})

app.get('/profile/:id', (req,res) => {
    const {id} = req.params;
    let idFound = false;
    database.users.forEach(user => {
        if(user.id === id){
            idFound=true;
            return res.json(user);
        }
    })
    if(!idFound){
        res.status(400).json("user not found!");
    }
})




app.put('/image', (req,res) => {
    const {id} = req.body;
    let idFound = false;
    database.users.forEach(user => {
        if(user.id === id){
            idFound=true;
            user.entries++;
            return res.json(user);
        }
    })
    if(!idFound){
        res.status(400).json("user not found!");
    }
})

app.post('/register', (req,res) => {
    
    const {name,email,password} = req.body;
    bcrypt.hash(password, null, null, function(err, hash) {
        console.log(hash);
    });
    database.users.push(
    {
        id : '125',
        name:name,
        email:email,
        password: password,
        entires: 0,
        joined: new Date()
    }
    )
    // res.send("registered");
    res.json(database.users[database.users.length-1]);
})

app.listen(3001, ()=>{
    console.log("App is running");
})

/*
res = this is working
signin --> post
register --> post = user
/profile/:userId --> GET = user
/image --> Put --> user
*/