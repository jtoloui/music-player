const mongoose = require("mongoose");

const track = new mongoose.Schema({
	label: {
		type: String,
		required: true
	},
	album: {
		type: String
	},
	fileName: {
		type: String,
		required: true,
		adminSearchField: true
	},
	fileLocation: {
		type: String,
		required: true
	},
	fileType: {
		type: String
	},
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = Track = mongoose.model("track", track);
