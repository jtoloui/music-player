const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0-cs2gr.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const connectDB = async () => {
	await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	console.log("Connected to DB....");
};

module.exports = connectDB;
