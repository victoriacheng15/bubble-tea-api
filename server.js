require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const PORT = process.env.PORT || 8000;
const url = process.env.MONGODB_URI;

let db;
const dbName = "bubble-tea-api";

MongoClient.connect(url, { useUnifiedTopology: true })
  .then((client) => {
    console.log("connect to database");
    db = client.db(dbName);
  })
  .catch((err) => console.log("mongodb is not connected", err));

app.set("vew engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (request, response) => {
  const teasCollection = db.collection("teas");
  teasCollection
    .find()
    .toArray()
    .then((results) => {
      response.render("index.ejs", { teas: results });
    })
    .catch((err) => console.log(err));
});

app.get("/history", (request, response) => {
  response.render("history.ejs");
});

app.get("/leaderboard", (request, response) => {
  // response.redirect('/history.ejs');
  const orderCollection = db.collection("orders");
  orderCollection
    .find()
    .sort({ count: -1 })
    .toArray()
    .then((results) => {
      response.render("leaderboard.ejs", { orders: results });
    });
});

// this was for sending data of teas and columns to the database's collection named teas
// app.post('/teas', (request, response) => {
//   db.collection('teas').insertOne(request.body)
//     .then(() => {
//       response.redirect('/');
//     });
// });

app.post("/order", (request, respone) => {
  const { tea, topping } = request.body;
  const orderCollection = db.collection("orders");
  orderCollection
    .find({ tea, topping })
    .toArray()
    .then((result) => {
      if (result) {
        orderCollection.updateOne(
          { tea, topping },
          { $inc: { count: 1 } },
          { upsert: true }
        );
      } else if (!result) {
        orderCollection.insertOne({
          tea,
          topping,
          count: 1,
        });
      }
      respone.redirect("/");
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
