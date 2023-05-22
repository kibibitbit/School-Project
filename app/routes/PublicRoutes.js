"use strict"
const express = require('express');
const router = express.Router();
const controller = require('../Controller/maincontroller');

router.get('/register',controller.register);
router.get('/login',controller.login);
router.get('/races',controller.races)
router.get('/allModies',controller.allrenstrecken);
router.get('/streckenmanage',controller.streckenmanage);
router.get('/automanage',controller.automanage);
router.get('/zeitmanage',controller.zeitmanage);
router.post('/createzeit',controller.createzeit);
router.post('/deletezeit',controller.deletezeit);
router.post('/updatezeit',controller.updatezeit);
router.post('/createauto',controller.createauto);
router.post('/deleteauto',controller.deleteauto);
router.post('/updateauto',controller.updateauto);
router.post('/createstrecke',controller.createstrecke);
router.post('/deletestrecke',controller.deletestrecke);
router.post('/updatestrecke',controller.updatestrecke);
router.get('/',controller.index);
router.get('/*/',controller.races);
router.get('*',controller.error_page);

module.exports = router;