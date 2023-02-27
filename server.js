const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;
const url = process.env.MONGODB_URI;

const client = new MongoClient(url);
const dbName = "bubble-tea-api";
const db = client.db(dbName);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const teasCollection = await db.collection("teas");
    const result = await teasCollection.find().toArray();
    res.render("index", { teas: result });
  } catch (error) {
    console.log(error);
  }
});

app.get("/history", (req, res) => {
  res.render("history");
});

app.get("/leaderboard", async (req, res) => {
  try {
    const orderCollection = await db.collection("orders");
    const results = await orderCollection.find().sort({ count: -1 }).toArray();
    res.render("leaderboard", { orders: results });
  } catch (error) {
    console.log(error);
  }
});

app.post("/order", async (req, res) => {
  const { tea, topping } = req.body;
  try {
    const orderCollection = await db.collection("orders");
    const results = await orderCollection.find({ tea, topping }).toArray();

    if (results) {
      orderCollection.updateOne(
        { tea, topping },
        { $inc: { count: 1 } },
        { upsert: true }
      );
    } else {
      orderCollection.insertOne({
        tea,
        topping,
        count: 1,
      });
    }

    res.redirect("/leaderboard");
  } catch (error) {
    console.log(error);
  }
});

client.connect((err) => {
  if (err) {
    console.error(err);
  }

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
