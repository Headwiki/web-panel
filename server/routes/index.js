const express = require('express');
const router = express.Router();

// Mount sub routers
router.use('/todo', require('./todo'));

router.get('/', function (req, res) {
    res.send('Hello')
  })

module.exports = router;