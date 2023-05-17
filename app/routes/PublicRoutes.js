"use strict"
const express = require('express');
const router = express.Router();
const controller = require('../Controller/maincontroller');

router.get('/register',controller.register);
router.get('/login',controller.login);
router.get('/races',controller.races)
router.get('/allModies',controller.allrenstrecken);
router.get('/manage',controller.manage);
router.post('/create',controller.create);
router.post('/delete',controller.del);
router.post('/update',controller.update);
router.get('/',controller.index);
router.get('/*/',controller.races);
router.get('*',controller.error_page);

module.exports = router;