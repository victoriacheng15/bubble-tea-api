const express = require("express");
const connectDb = require("./src/config/connectDb");
const {
	getTeas,
	getOrders,
	updateOrderCount,
} = require("./src/config/getCollections");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;
const url = process.env.MONGODB_URI;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", async (req, res) => {
	try {
		const db = await connectDb(url);
		const teas = await getTeas(db);
		res.render("index", { teas });
	} catch (error) {
		console.log(error);
	}
});

app.get("/history", (req, res) => {
	res.render("history");
});

app.get("/leaderboard", async (req, res) => {
	try {
		const db = await connectDb(url);
		const orders = await getOrders(db);
		res.render("leaderboard", { orders });
	} catch (error) {
		console.log(error);
	}
});

app.post("/order", async (req, res) => {
	const { tea, topping } = req.body;

	try {
		const db = await connectDb(url);
		await updateOrderCount(db, tea, topping);
		res.redirect("/leaderboard");
	} catch (error) {
		console.log(error);
	}
});

(async () => {
	try {
		await connectDb(url);
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
	} catch (err) {
		console.error(err);
	}
})();
