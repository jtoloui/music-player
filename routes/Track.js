const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const router = express.Router();

const Track = require("../Model/Track");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		cb(
			null,
			new Date().toISOString() + file.originalname.replace(/\s/g, "-")
		);
	},
});
const upload = multer({ storage: storage });

mongoose.set("useFindAndModify", false);

router.get("/", async (req, res) => {
	try {
		const getAllTracks = await Track.find()
			.select("label album fileName fileLocation fileType")
			.exec();

		return res.status(200).json({
			success: true,
			total: getAllTracks.length,
			track: getAllTracks,
			request: {
				type: "GET",
				url: `http://localhost:${process.env.PORT}/api/track`,
			},
		});
	} catch (error) {
		return res.status(404).json({
			success: false,
			message: "No tracks found",
		});
	}
});

router.get("/:trackId", async (req, res, next) => {
	try {
		const id = req.params.trackId;
		const trackById = await Track.findById(id)
			.select("label fileName fileLocation fileType")
			.exec();
		if (trackById === null) {
			throw Error;
		}

		return res.status(200).json({
			success: true,
			track: trackById,
			request: {
				type: "GET",
				url: `http://localhost:${process.env.PORT}/api/track`,
			},
		});
	} catch (error) {
		return res.status(404).json({
			success: false,
			message: "Track not found",
		});
	}
});

router.post("/", upload.single("track"), async (req, res, next) => {
	try {
		const { label, album } = req.body;
		const { originalname, mimetype, path } = req.file;
		const trackModel = new Track({
			_id: new mongoose.Types.ObjectId(),
			label,
			album: album || "N/A",
			fileName: originalname,
			fileLocation: path,
			fileType: mimetype,
		});

		const created = await trackModel.save();
		return res.status(201).json({
			success: true,
			message: "Created Successfully",
			id: created._id,
			savedTrack: {
				label: created.label,
				album: created.album,
				fileName: created.fileName,
				path: `http://localhost:${process.env.PORT}/${created.fileLocation}`,
				fileType: created.fileType,
			},
			request: {
				type: "POST",
				url: `http://localhost:${process.env.PORT}/api/track`,
			},
		});
	} catch (error) {
		return res.status(400).json({
			success: false,
			message: "Bad Input",
		});
	}
});

router.delete("/:trackId", async (req, res) => {
	try {
		const { trackId } = req.params;
		const deletedTrack = await Track.findOneAndRemove({ _id: trackId });
		fs.unlinkSync(deletedTrack.fileLocation);
		return res.status(200).json({
			success: true,
			message: "Track deleted",
		});
	} catch (error) {
		return res.status(404).json({
			success: false,
			message: "Track not found!",
		});
	}
});

module.exports = router;
