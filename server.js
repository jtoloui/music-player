const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const admin = require("sriracha");
const timeout = require("connect-timeout");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const connectDB = require("./DB/connection");
const trackRoute = require("./routes/Track");
const app = express();

const port = process.env.PORT || 3000;

connectDB();
const options = {
	username: process.env.user,
	password: process.env.pws,
};

// middleware and logger
app.use(express.json());
app.use(logger("dev"));
app.use(cors());
app.use(timeout("25s"));
app.use(express.urlencoded({ extended: true }));
// middleware security 
app.use(helmet.xssFilter());
app.use(helmet.frameguard());

app.use("/admin", admin(options));
// public routes for tracks to access on FE
app.use("/uploads", express.static("uploads"));

// handle track specific routes
app.use("/api/track", trackRoute);

// Use compiled React SPA code as base URL for API
app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

// catch 404 and forward to error handler
// note this is after all good routes and is not an error handler
// to get a 404, it has to fall through to this route - no error involved
app.use((req, res, next) => {
	const err = new Error("Not Found");
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	res.status(err.status || 500).json({
		success: false,
		...res.locals,
	});
	next();
});

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});
