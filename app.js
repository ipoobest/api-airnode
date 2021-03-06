var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var mongoose = require('mongoose');
var moment = require('moment-timezone');
var zone = "Asia/Bangkok";

app.use(bodyParser.json());

Airnose = require('./models/airnose');

// mongoose.connect('mongodb://database:27017/apiairnode');
let mongodb = require('mongodb').MongoClient
const url = 'mongodb://database:27017'
const dbname = 'apiairnode'

mongodb.connect(url, (err, client) => {
	if (err) return (err)
	else {
		const db = client.db(dbName)

		db.collection(type + ":" + entity).insertOne(document, (error, result) => {
			if (error) return(error)
			else { resolve(result) }
		})

		client.close()
	}
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/test', (req, res) =>{
	res.end('ffff');
});

app.get('/get-api/:limit', function(req, res){
	var limit = req.params.limit;
	limit = parseInt(limit);
    Airnose.find({}).sort({_id: -1}).limit(limit).exec(function(err, air) {
		if(err){
			throw err;
		}
		res.json(air);
	  });
});


app.get('/get-data-station/:station/:limit' ,function(req,res){
	var station = req.params.station;
	var limit = req.params.limit;

	station = parseInt(station);
	limit = parseInt(limit);

	Airnose.find({site: station}).sort({_id: -1}).limit(limit).exec(function(err, air) {
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

app.get('/get-time', function(req, res){
	// var time = {
	// 	time: String(moment().tz("Asia/Bangkok"))
	// }
	res.json(String(moment.tz(zone).format()));
});

app.get('/add', function(req, res){
	var airnose = {
		site: req.query.site,
		time: moment().tz("Asia/Bangkok"),
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
var server = app.listen(80, function(){
    console.log("Start API AIRNODE Successful !!");
});
