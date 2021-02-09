const express = require('express');
var compression = require('compression');
const mollify = require('mollify');

const app = express();

app.use(compression())
// app.use(mollify({
// dir: __dirname,
// is: true // default
// }));
// const morgan = require('morgan');

const PORT = 3003;
const bodyParser = require('body-parser');
const db = require('../database/indexPsql.js');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/dist")));
// app.use(morgan('dev'));


app.get('/api/reviews', (req, res) => {
  return db.query(`select * from reviews order by id limit 10;`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})

app.post('/api/reviews', (req, res) => {
  return db.query(`insert into reviews (${keys}) values (${vals})`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})

app.get('/api/reviews/recent', (req, res) => {
  return db.query(`select * from reviews order by id limit 10;`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})

app.get('/api/reviews/recent10', (req, res) => {
  return db.query(`select * from reviews order by id desc limit 10;`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})
app.get('/api/reviews/helpful10', (req, res) => {
  return db.query(`select * from reviews order by upvote desc limit 10;`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})
app.get('/api/reviews/highest10', (req, res) => {
  return db.query(`select * from reviews order by overallRating desc limit 10;`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})
app.get('/api/reviews/lowest10', (req, res) => {
  return db.query(`select * from reviews order by overallRating asc limit 10;`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})
app.get('/api/reviews/user/:id', (req, res) => {
  return db.query('select * from reviews where id = ${ id } limit 10;')
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})

// app.put('/reviews/:id', ()=> {
//   return db.query()
//   .then(r=> res.status(200).send(r))
//   .catch(err=> res.status(400).send(err));
// })

// app.delete('/reviews/:id', ()=> {
//   return db.query()
//   .then(r=> res.status(200).send(r))
//   .catch(err=> res.status(400).send(err));
// })

app.listen(PORT, () => {
  console.log('listening at localhost:' + PORT + "!")
})