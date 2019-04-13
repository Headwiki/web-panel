const express = require('express')
const todoController = require('./../controllers/todo')
const router = express.Router()

router
  .route('/')
  .get(todoController.getAll)
  .post(todoController.add)

router
  .route('/delete')
  .post(todoController.findOneAndDelete)

module.exports = router