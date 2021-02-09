const db = require('../database/indexPsql.js');

app.get('/api/reviews', ()=> {
  return db.query(`select * from reviews limit 10;`)
    .then(r => res.status(200).send(r.rows))
    .catch(err=> res.status(400).send(err));
})

app.get('/api')

app.get('/reviews/recent', (req, res)=> {
  return db.query(`select * from reviews order by id limit 10;`)
    .then(r=> res.status(200).send(r))
    .catch(err=> res.status(400).send(err));
})

app.post('/reviews', (req, res)=> {
  return db.query(`insert into reviews (${keys}) values (${vals})`)
    .then(r => res.status(200).send(r))
    .catch(err => res.status(400).send(err));
})
app.get('/reviews/recent10', (req, res)=> {
  return db.query(`select * from reviews order by id desc limit 10;`)
    .then(r=> res.status(200).send(r))
    .catch(err=> res.status(400).send(err));
})
app.get('/reviews/helpful10', (req, res)=> {
  return db.query(`select * from reviews order by upvote desc limit 10;`)
    .then(r=> res.status(200).send(r))
    .catch(err=> res.status(400).send(err));
})
app.get('/reviews/highest10', (req, res)=> {
  return db.query(`select * from reviews order by overallRating desc limit 10;`)
    .then(r=> res.status(200).send(r))
    .catch(err=> res.status(400).send(err));
})
app.get('/reviews/lowest10', (req, res)=> {
  return db.query(`select * from reviews order by overallRating asc limit 10;`)
    .then(r=> res.status(200).send(r))
    .catch(err=> res.status(400).send(err));
})
app.get('/reviews/user/:id', (req, res)=> {
  return db.query('select * from reviews where id = ${ id } limit 10;')
    .then(r=> res.status(200).send(r))
    .catch(err=> res.status(400).send(err));
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