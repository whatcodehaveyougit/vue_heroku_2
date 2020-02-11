const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());

 // if (process.env.NODE_env === 'production') {
 //   // Static FOlder
 //   app.use(express.static(__dirname + '/public/'));
 //
 //   app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html  '));
 // }

MongoClient.connect('mongodb://sigurd:password1@ds259518.mlab.com:59518/heroku_7ftsxjvl')
.then((client) =>{
  const db = client.db('heroku_7ftsxjvl');
  const bookingsCollection = db.collection('bookings');
  const bookingsRouter = createRouter(bookingsCollection);
  app.use('/api/bookings', bookingsRouter);
  app.use('/', express.static(path.join(__dirname + '/public/')));
})
.catch(console.err);

app.listen(process.env.PORT || 3000, function () {
  console.log(`Listening on port ${this.address().port }`)
})
