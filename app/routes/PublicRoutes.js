"use strict"
const express = require('express');
const app = express();
const router = express.Router();
const controller = require('../Controller/maincontroller');
const path = require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', async (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        console.error(error);
        res.status(500).send('Fehler beim Abrufen der Filme');
    }
});
router.get('*',(req, res)=>{
    res.render('Error')
});

module.exports = router;