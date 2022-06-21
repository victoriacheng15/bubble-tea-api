require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

const PORT = process.env.PORT || 8000;
const url = process.env.DB_URL;

let db;
const dbName = 'bubble-tea-api';

MongoClient.connect(url, { useUnifiedTopology: true })
  .then((client) => {
    console.log('connect to database');
    db = client.db(dbName);
  })
  .catch((err) => console.log(err));

app.set('vew engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (request, response) => {
  db.collection('teas').find().toArray()
    .then((results) => {
      response.render('index.ejs', { teas: results });
    })
    .catch((err) => console.log(err));
});

app.post('/teas', (request, response) => {
  db.collection('teas').insertOne(request.body)
    .then((result) => {
      response.redirect('/');
    });
});

app.post('/order', (request, respone) => {
  const { tea, topping } = request.body;
  console.log({ tea, topping, amount: 1 });
  respone.redirect('/');
//   db.collection('orders').insertOne(request.body.tea)
//     .then((result) => {
//       respone.redirect('/');
//       console.log(result);
//     });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
