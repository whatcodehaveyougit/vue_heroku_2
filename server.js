const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());

 if (process.env.NODE_env === 'production') {
   // Static FOlder
   app.use(express.static(__dirname + '/public/'));

   app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html  '));
 }

MongoClient.connect('mongodb://localhost:27017')
.then((client) =>{
  const db = client.db('hotel');
  const bookingsCollection = db.collection('bookings');
  const bookingsRouter = createRouter(bookingsCollection);
  app.use('/api/bookings', bookingsRouter);
})
.catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port }`)
})
