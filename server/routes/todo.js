const express = require('express')
//const subpageController = require('./../controllers/subpage')
const router = express.Router()

router
  .get('/', (req, res) => {
    res.send([
      'Thing 1',
      'Thing 2'
    ])
  })

/* router
  .route('/:id')
  .get(subpageController.getSubpage)

router
  .route('/byName/:name')
  .get(subpageController.getSubpageByName) */

module.exports = router