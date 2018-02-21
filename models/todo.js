var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
	title: String,
	description: String,
	date: Date,
	status: Boolean
}, {collection: 'todo'});

module.exports = mongoose.model("Todo", todoSchema);