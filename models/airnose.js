var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment-timezone');


var airnoseSchema = mongoose.Schema({
    "site":{
        type:Number
    },
    "time" : {
        type: String,
    },
    "temperature":{
        type:Number
    },
    "humidity":{
        type:Number
    },
    "pressure":{
        type:Number
    },
    "v_solar":{
        type:Number
    },
    "v_battery":{
        type:Number
    },
    "wd":{
        type:Number
    },
    "ws":{
        type:Number
    },
    "rv":{
        type:Number
    },
    "sen1":{
        type:Number
    },
    "sen2":{
        type:Number
    },
    "sen3":{
        type:Number
    },
    "sen4":{
        type:Number
    },
    "sen5":{
        type:Number
    },
    "sen6":{
        type:Number
    },
    "sen7":{
        type:Number
    },
    "sen8":{
        type:Number
    },
    "sen9":{
        type:Number
    },
    "sen10":{
        type:Number
    },

});

var Airnose = module.exports = mongoose.model('Airnose', airnoseSchema);

module.exports.getAir = function(callback, limit){
	Airnose.find(callback).limit(limit);
}

module.exports.addAir = function(air, callback){
	Airnose.create(air, callback);
}

