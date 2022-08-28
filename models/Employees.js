const mongoose = require("mongoose");

const schema = mongoose.Schema({
	Name : String,
	Age : Number,
	University :String,
	Status : String

	
});

module.exports = mongoose.model("Employees", schema);