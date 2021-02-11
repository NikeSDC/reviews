const express = require('express');
var compression = require('compression');

const app = express();

app.use(compression())

const PORT = 3003;
const bodyParser = require('body-parser');
const pool = require('../database/indexPsql.js');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/dist")));


app.get('/api/reviews', (req, res) => {
  return pool.query(`select * from reviews limit 10;`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})

app.post('/api/reviews', (req, res) => {
  return pool.query(`insert into reviews (${keys}) values (${vals})`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})

app.get('/api/reviews/recent', (req, res) => {
  return pool.query(`select * from reviews order by id limit 10;`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})

app.get('/api/reviews/recent10', (req, res) => {
  return pool.query(`select * from reviews order by id desc limit 10;`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})
app.get('/api/reviews/helpful10', (req, res) => {
  return pool.query(`select * from reviews order by upvote desc limit 10;`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})
app.get('/api/reviews/highest10', (req, res) => {
  return pool.query(`select * from reviews order by overallRating desc limit 10;`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})
app.get('/api/reviews/lowest10', (req, res) => {
  return pool.query(`select * from reviews order by overallRating asc limit 10;`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})
app.get('/api/reviews/user/:id', (req, res) => {
  return pool.query('select * from reviews where id = ${ id } limit 10;')
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})

// app.put('/reviews/:id', ()=> {
//   return pool.query()
//   .then(r=> res.status(200).send(r))
//   .catch(err=> res.status(400).send(err));
// })

// app.delete('/reviews/:id', ()=> {
//   return pool.query()
//   .then(r=> res.status(200).send(r))
//   .catch(err=> res.status(400).send(err));
// })

app.listen(PORT, () => {
  console.log('listening at localhost:' + PORT + "!")
})
