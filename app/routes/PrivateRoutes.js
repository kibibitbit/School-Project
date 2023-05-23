"use strict"
const express = require('express');
const router = express.Router();
const controller = require('../Controller/maincontroller');

router.post('/register',controller.createUser);
router.post('/login',controller.loginUser);

module.exports = router;