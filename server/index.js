const express = require('express');
// var compression = require('compression')
// const mollify = require('mollify');

// require('newrelic');


const app = express();
// app.use(compression())

const PORT = 3003;
// app.use(mollify({
  // dir: __dirname,
  // is: true // default
// }));
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database');
const router = require('./router.js');
const path = require('path');

app.use(bodyParser.json());
// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "..", "/client", "dist")));

app.use('/api/', router);

app.listen(PORT, () => {
  console.log('listening at localhost:' + PORT + "!")
})