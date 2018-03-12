var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var airnoseSchema = mongoose.Schema({
    "datetime" : {
        type: Date,
        default: Date.now
    },
    "key":{
        type:String
    }
});

var Airnose = module.exports = mongoose.model('Airnose', airnoseSchema);

module.exports.getAir = function(callback, limit){
	Airnose.find(callback).limit(limit);
}

module.exports.addAir = function(air, callback){
	Airnose.create(air, callback);
}

