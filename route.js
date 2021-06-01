const path = require('path');
const express = require('express');
const controller = require('./controller')

const router = express.Router()

router.get('/', controller.getIndex);

router.post('/search', controller.getSearch)


module.exports = router;