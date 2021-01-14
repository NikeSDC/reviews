const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router
  .route('/reviews')
  .get(controller.get)
  .post(controller.post)

router
  .route('/reviews/:id')
  .put(controller.put)
  .delete(controller.delete)

module.exports = router;