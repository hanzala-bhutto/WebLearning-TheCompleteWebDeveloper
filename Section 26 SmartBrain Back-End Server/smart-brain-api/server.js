const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("this is working");
})

app.listen(3000, ()=>{
    console.log("App is running");
})

/*
res = this is working

*/