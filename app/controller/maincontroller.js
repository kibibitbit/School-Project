"use strict"
const rennstrecke = require('../models/rennstrecke');
const Fahrzeit = require('../models/fahrzeit');
const azubi = require('../models/azubi');
const encrytion = require('./encryption');
// const path = require("path");
// const PulbicRoutes = require('../routes/PublicRoutes');
// const PrivateRoutes = require('../routes/PrivateRoutes');

async function index(req,res){
    const rennstrecken = await rennstrecke.getallrennstrecken();
    const fahrzeit = await Fahrzeit.getallFahrzeit();
    console.log(rennstrecken)
    try {
        res.render('index',{rennstrecken,fahrzeit});
    } catch (error) {
        console.error(error);
        res.render('Error');
    }
}
async function register (req,res){
    try {
        const message = req.query.message|| '';
        res.render('register',{
            message:message
        });
    }catch (error){
        console.log(error)
    }
}
async function login (req,res){
    try {
        const message = req.query.message|| '';
        res.render('login',{
            message:message
        });
    }catch (error){
        console.log(error)
    }
}
async function error_page(req,res){
    res.render('Error');
}
async function createUser(req,res){
    const {Username,Passwort,passwordconfirm} = req.body;
    try {
        const UserExists = await azubi.Usernamecheck(Username);
        if (UserExists) {
            return res.render('register', {
                message: 'Username already taken',
            });
        }
        if(Passwort !== passwordconfirm){
            return res.render('register',{
                message: 'Password not match'
            });
        }
        else{
            const hashedpassword = await encrytion.hashpassword();
            await azubi.CreateNewUser('','','',hashedpassword,Username);
            return res.render('login',{
                message:'Successfully registered'
            });
        }

    }catch (error){
        console.log(error)
    }
}
async function loginuser(req,res){
    try {
    }catch (error){
        console.log(error)
    }
}
async function allrenstrecken(req,res){
    const races = await rennstrecke.getallrennstrecken();
    try {
        res.render('allModies',{races});
    }catch (error){
        res.render('error');
    }
}
async function races(req,res){
    const ID = req.url.replace('/','');
    try {
        const strecke = await rennstrecke.Strecken(ID);
        res.render('races',{strecke});
    }catch (error){
        res.render('Error');
        console.log(error)
    }
}
async function manage(req,res){
    try {
        res.render('manage')
    }catch (error){
        res.render('Error');
    }
}
async function del(req,res){
    try {
        const {ID} = req.body;
        await rennstrecke.DeleteStrecke(ID);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        console.log(`Error deleting ${ID}`);
    }
}
async function update(req,res) {
    try {
        const {Name,Laenge} = req.body;
        await rennstrecke.UpdateStrecke(Name,Laenge);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        console.log(`Error Updating the rennstrecke ${Name}`);
    }
}
async function create(req,res){
    try {
        const {Name,Laenge} = req.body;
        await rennstrecke.CreateNewStrecke(Name,Laenge)
        res.redirect('/');
    }catch (error){
        console.error(error)
    }
}
module.exports = {index,login,error_page,register,createUser,loginuser,races,allrenstrecken,manage,del,update,create}