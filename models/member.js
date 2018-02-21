var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
	name: String,
	age: Number
}, {collection: 'member'});

module.exports = mongoose.model("Member", memberSchema);