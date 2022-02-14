const { Router } = require('express');

const router = Router();

const {
  getExample,
  addExample,
  updateExample,
  deleteExample,
} = require('../controllers/example.controller');

router.route('/')
  .get(getExample)
  .post(addExample)

router.route('/:id')
  .put(updateExample)
  .delete(deleteExample)

module.exports = router;