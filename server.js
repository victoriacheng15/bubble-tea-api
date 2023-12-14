const express = require("express");
const connectDb = require("./src/config/connectDb");
require("dotenv").config();
const router = require("./src/routes/allRoutes")

const app = express();

const PORT = process.env.PORT || 8000;
const url = process.env.MONGODB_URI;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(router);

(async () => {
	try {
		await connectDb(url);
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
	} catch (err) {
		console.error(err);
	}
})();
