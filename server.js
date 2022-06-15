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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});

app.post('/teas', (request, response) => {
  db.collection('teas').insertOne(request.body)
    .then((result) => {
      response.redirect('/');
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
