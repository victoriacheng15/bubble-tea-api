const express = require("express");
// eslint-disable-next-line prefer-destructuring
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;
const url = process.env.MONGODB_URI;

let db;
let client;
const dbName = "bubble-tea-api";

const connectDB = async () => {
  try {
    client = await MongoClient.connect(url, { useUnifiedTopology: true });
    db = client.db(dbName);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

connectDB();

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

// this was for sending data of teas and columns to the database's collection named teas
// app.post('/teas', (request, response) => {
//   db.collection('teas').insertOne(request.body)
//     .then(() => {
//       response.redirect('/');
//     });
// });

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
