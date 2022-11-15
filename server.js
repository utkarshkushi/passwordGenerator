const mongoose = require('mongoose');
const express = require('express');
const router = require('./routes');

mongoose.connect('mongodb://0.0.0.0:27017/passworddb')
.then(()=>console.log("db connected"))
.catch(err => console.log(err));

const app = express();
app.use(router);

app.listen(8080, ()=>{
    console.log("listening on port 8080");
})


