var express = require('express');

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

var app = express();

app.get('/helloworld', function(req, res){
    res.end("hello world");
});

app.post('/', function(req, res){

});

var server = app.listen(3000, function(){
    console.log("Start API AIRNODE Successful !!");
});