const connectDb = require("../config/connectDb");
const {getTeas, getOrders, updateOrderCount} = require("../utils/getCollections")

require("dotenv").config();
const url = process.env.MONGODB_URI;

async function homePage(req, res) {
  try {
        const db = await connectDb(url);
        const teas = await getTeas(db);
        res.render("index", { teas });
    } catch (error) {
        console.log(error);
    }
}

async function historyPage(req, res) {
  res.render("history");
}

async function leaderboardPage(req, res) {
  try {
    const db = await connectDb(url);
    const orders = await getOrders(db);
    res.render("leaderboard", { orders });
  } catch (error) {
    console.log(error);
  }
}

async function updateOrder (req, res) {
  const { tea, topping } = req.body;

  try {
    const db = await connectDb(url);
    await updateOrderCount(db, tea, topping);
    res.redirect("/leaderboard");
  } catch (error) {
    console.log(error);
  }
}

module.exports= {
  homePage,
  historyPage,
  leaderboardPage,
  updateOrder
}