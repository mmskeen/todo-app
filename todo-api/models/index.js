require('dotenv').config();
var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb+srv://admin-michael:' + process.env.MONGO_PASSWORD + '@cluster0-flcwo.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
	console.log("Connected to DB!");
}).catch(err => {
	console.log("ERROR: " + err.message);
});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");