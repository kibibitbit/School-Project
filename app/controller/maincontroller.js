"use strict"
const rennstrecke = require('../models/rennstrecke');
// const path = require("path");
// const PulbicRoutes = require('../routes/PublicRoutes');
// const PrivateRoutes = require('../routes/PrivateRoutes');

async function index(req,res){
    const rennstrecken = await rennstrecke.getallautos();
    console.log(rennstrecken)
    try {
        res.render('index',{rennstrecken});
    } catch (error) {
        console.error(error);
        res.render('Error');
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

module.exports = {index,login,error_page}