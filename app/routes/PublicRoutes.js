"use strict"
const express = require('express');
const router = express.Router();
const controller = require('../Controller/maincontroller');

router.get('/',controller.index);
router.get('*',controller.error_page);

module.exports = router;