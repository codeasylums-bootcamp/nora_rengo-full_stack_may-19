const express = require('express'); 
const morgan = require('morgan');  
const parser = require('body-parser');
const mongoose = require('mongoose');

const port=7000;
const app=express();

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://kalpit:qwerty1234@cluster0-qzlbf.mongodb.net/ides?retryWrites=true&w=majority');

const users = require('./routes/users');
const posts = require('./routes/posts');

app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type,Authorization');
    res.set('Content-Type','application/json');
    next();
});

//const users = require('./routes/users');

app.use('/',posts)
app.use('/', users)

app.listen(port,function(){
    console.log(`Server listening on ${port}`)
});


