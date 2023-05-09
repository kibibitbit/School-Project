"use strict"
const Auto = require('../models/auto');
const bodyParser = require("body-parser");
const path = require("path");
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine','ejs');
app.use( express.static(path.join(__dirname,'app')));
app.use( express.static(path.join(__dirname,'public')));
async function index(req,res){
    try {
        await res.render('index');
    } catch (error) {
        console.error(error);
        res.render('Error');
        res.status(500).send('Fehler beim Abrufen der Filme');
    }
}
async function login(req,res){
    try {
        res.render('login')
    } catch (error){
        console.error(error)
        res.render('Error');
        res.status(500).send('fehler beim aufrufen der login Page')
    }
}
async function error_page(req,res){
    res.render('Error');
}
exports.autos = async (req,res)=>{
    try{
    }catch (error){
        console.error(error);
        console.log('Internal Error in index');
    }
}

module.exports = {index,login,error_page}