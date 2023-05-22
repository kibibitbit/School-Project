"use strict"
const rennstrecke = require('../models/rennstrecke');
const Fahrzeit = require('../models/fahrzeit');
const azubi = require('../models/azubi');
const auto = require('../models/auto');
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
async function streckenmanage(req,res){
    try {
        res.render('streckenmanage')
    }catch (error){
        res.render('Error');
    }
}
async function deletestrecke(req,res){
    try {
        const {ID} = req.body;
        await rennstrecke.DeleteStrecke(ID);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        console.log(`Error deleting ${ID}`);
    }
}
async function updatestrecke(req,res) {
    try {
        const {Name,Laenge,ID} = req.body;
        await rennstrecke.UpdateStrecke(Name,Laenge,ID);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        console.log(`Error Updating the rennstrecke ${Name}`);
    }
}
async function createstrecke(req,res){
    try {
        const {Name,Laenge} = req.body;
        await rennstrecke.CreateNewStrecke(Name,Laenge)
        res.redirect('/');
    }catch (error){
        console.error(error)
    }
}
async function automanage(req,res){
    try {
        res.render('automanage');
    }catch (error){
        console.log(error);
    }
}
async function deleteauto(req,res){
    try {
        const {ID} = req.body;
        await autotyp.DeleteAuto(ID);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        console.log(`Error deleting ${ID}`);
    }
}
async function updateauto(req,res) {
    try {
        const {Name,TeamID,Typ,ID} = req.body;
        await auto.UpdateAuto(Name,TeamID,Typ,ID);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        console.log(`Error Updating the car ${Name}`);
    }
}
async function createauto(req,res){
    try {
        const {Name,Typ,TeamID} = req.body;
        await auto.CreateNewAuto(Name,Typ,TeamID);
        res.redirect('/');
    }catch (error){
        console.error(error)
    }
}

async function zeitmanage(req,res){
    try {
        res.render('zeitmanage');
    }catch (error){

    }
}
async function updatezeit(req,res) {
    try {
        const {ID,AutoID,RennstreckeID,fahrzeit,Timestamp} = req.body;
        await Fahrzeit.UpdateZeit(ID,AutoID,RennstreckeID,fahrzeit,Timestamp);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        console.log(`Error beim updaten der zeit`);
    }
}
async function createzeit(req,res){
    try {
        const {RennstreckeID,fahrzeit,Timestamp} = req.body;
        await Fahrzeit.CreateNewZeit(RennstreckeID,fahrzeit,Timestamp);
        res.redirect('/');
    }catch (error){
        console.error(error)
    }
}
async function deletezeit(req,res){
    try {
        const {ID} = req.body;
        await Fahrzeit.DeleteZeit(ID);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        console.log(`Error deleting ${ID}`);
    }
}
module.exports =
    {
        index,
        login,
        error_page,
        register,
        createUser,
        loginuser,
        races,
        allrenstrecken,
        streckenmanage,
        deletestrecke,
        updatestrecke,
        createstrecke,
        createauto,
        deleteauto,
        updateauto,
        automanage,
        zeitmanage,
        deletezeit,
        updatezeit,
        createzeit
    }