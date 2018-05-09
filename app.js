var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.use(bodyParser.json());

Airnose = require('./models/airnose');
// mongoose.connect('mongodb://database:27017/apiairnode');
mongoose.connect('mongodb://localhost:27017/apiairnode');
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
		res.json(air.reverse());
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

app.get('/add', function(req, res){
	var airnose = {
		site: req.query.site,
		temperature: req.query.t,
		humidity: req.query.h,
		pressure: req.query.p,
		v_solar: req.query.s,
		v_battery: req.query.b,
		wd: req.query.wd,
		ws: req.query.ws,
		rv: req.query.r,
		sen1: req.query.s1,
		sen2: req.query.s2,
		sen3: req.query.s3,
		sen4: req.query.s4,
		sen5: req.query.s5,
		sen6: req.query.s6,
		sen7: req.query.s7,
		sen8: req.query.s8,
		sen9: req.query.s9,
		sen10: req.query.s10,
	};
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