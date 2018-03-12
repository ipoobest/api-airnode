var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.use(bodyParser.json());

Airnose = require('./models/airnose');
mongoose.connect('mongodb://database:27017/apiairnode');
// mongoose.connect('localhost:27017/apiairnode');
// mongoose.connect('mongodb://mongodb:27017/apiairnode');

var db = mongoose.connection;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/get-api', function(req, res){
    Airnose.getAir(function(err, air){
		if(err){
			throw err;
		}
		res.json(air);
	});
});

app.post('/api/airnose', function(req, res){
	var airnose = req.body;
	Airnose.addAir(airnose, function(err, airnose){
		if(err){
			throw err;
		}
		res.json(airnose);
	});
});

// var server = app.listen(process.env.PORT || 3000, function(){
var server = app.listen(3000, function(){
    console.log("Start API AIRNODE Successful !!");
});