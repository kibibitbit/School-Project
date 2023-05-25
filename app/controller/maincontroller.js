"use strict"
const rennstrecke = require('../models/rennstrecke'); //Module requiren
const Fahrzeit = require('../models/fahrzeit');
const azubi = require('../models/azubi');
const auto = require('../models/auto');
const encrytion = require('./encryption');

async function index(req,res){                  // Funktion der Main seite
    const rennstrecken = await rennstrecke.getallrennstrecken(); // ausgabe der rennstrecken
    const fahrzeit = await Fahrzeit.getallFahrzeit(); // ausgaben der fahrzeiten
    console.log(rennstrecken)                                 // die rennstrecken werden in der console ausgegeben
    try {
        res.render('index',{rennstrecken,fahrzeit});          // erzeugen der Main seite und die übergabe der rennstrecken und Fahrzeiten
    } catch (error) {
        console.error(error);                                 // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function register (req,res){              // function der regestrirungs seite
    try {
        const message = req.query.message|| '';        // massage den wert req.query.massage gebe ansonsten bleib er '' also leer
        res.render('register',{                               // regestriegunsgs seite erzeugen und nach message requesten
            message:message
        });
    }catch (error){
        console.log(error)                                    // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function allrenstrecken(req,res){         // function der modies
    const races = await rennstrecke.getallrennstrecken(); //races die werte der rennstrecken zuweisen
    try {
        res.render('allModies',{races});                      // erzeugen der allModie seite und den wert races übergeben
    }catch (error){
        res.render('error');                                  // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function races(req,res){ // Funktion der races
    const ID = req.url.replace('/','');                       // Der Konstante ID zuweisen das aus der URL die ID entnommen wird und das / mit '' ersetzt werden soll
    try {
        const strecke = await rennstrecke.Strecken(ID);// strecke den wert der streckenID zuweisen
        res.render('races',{strecke});                        // erzeugen der races und den wert der strecke übergeben
    }catch (error){
        res.render('Error');                                  // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben und die error page rendern
        console.log(error);
    }
}
async function streckenmanage(req,res){         // Funktion der streckenmanage seite
    try {
        res.render('streckenmanage')                          // erzeugen der streckenmanage seite
    }catch (error){
        res.render('Error');                                  // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function deletestrecke(req,res){          // Funktion der deletestrecken
    try {
        const {ID} = req.body;                                // ID bekommt den wert der aus dem body Requested wird
        await rennstrecke.DeleteStrecke(ID);                  // warten bis die Deletestrecken Funktion aus der class aufgerufen wird mit der ID aus dem body
        res.redirect('/');                                    // Kehrt zurück auf die Main seite
    } catch (error) {
        console.error(error);                                 // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
        console.log(`Error deleting ${ID}`);
    }
}
async function updatestrecke(req,res) {         // Funktion der updatestrecken
    try {
        const {Name,Laenge,ID} = req.body;                    // Die konstanten bekommen den wert aus dem body
        await rennstrecke.UpdateStrecke(Name,Laenge,ID);      // warten bis die Update funktion aufgerufen wird mit den konstanten aus dem body
        res.redirect('/');                                    // Kehrt zurück auf die Main seite
    } catch (error) {
        console.error(error);                                 // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
        console.log(`Error Updating the rennstrecke ${Name}`);
    }
}
async function createstrecke(req,res){           // Funktion der createstrecke
    try {
        const {Name,Laenge} = req.body;                        // Die konstanten bekommen den wert aus dem body
        await rennstrecke.CreateNewStrecke(Name,Laenge)        // warten bis die Create funktion aufgerufen wird mit den konstanten aus dem body
        res.redirect('/');                                     // Kehrt zurück auf die Main seite
    }catch (error){
        console.error(error)                                   // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function automanage(req,res){              // Funktion für automanage
    try {
        res.render('automanage');                              // erzeugen der automanage seite
    }catch (error){
        console.log(error);                                    // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function deleteauto(req,res){              // Funktion für deleteautos
    try {
        const {ID} = req.body;                                 // Die konstante bekommet den wert aus dem body
        await autotyp.DeleteAuto(ID);                          // warten bis die Deletestrecken Funktion aus der class aufgerufen wird mit der ID aus dem body
        res.redirect('/');                                     // Kehrt zurück auf die Main seite
    } catch (error) {
        console.error(error);
        console.log(`Error deleting ${ID}`);                   // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function updateauto(req,res) {             // Funktion für updateauto
    try {
        const {Name,TeamID,Typ,ID} = req.body;                 // Die konstanten bekommen den wert aus dem body
        await auto.UpdateAuto(Name,TeamID,Typ,ID);             // warten bis die Update funktion aufgerufen wird mit den konstanten aus dem body
        res.redirect('/');                                     // Kehrt zurück auf die Main seite
    } catch (error) {
        console.error(error);                                  //wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
        console.log(`Error Updating the car ${Name}`);
    }
}
async function createauto(req,res){              // Funktion für Updateauto
    try {
        const {Name,Typ,TeamID} = req.body;                    // Die konstanten bekommen den wert aus dem body
        await auto.CreateNewAuto(Name,Typ,TeamID);             // warten bis die Create funktion aufgerufen wird mit den konstanten aus dem body
        res.redirect('/');                                     // Kehrt zurück auf die Main seite
    }catch (error){
        console.error(error)                                   //wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}

async function zeitmanage(req,res){              // Funktion für die zeitmanage seite
    try {
        res.render('zeitmanage');                              // Erzeigen der Zeitmanage seite
    }catch (error){
        console.log(error)                                     //wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function updatezeit(req,res) {             //Funktion für Updatezeit
    try {
        const {ID,AutoID,RennstreckeID,fahrzeit,Timestamp} = req.body;// Die konstanten bekommen den wert aus dem body
        await Fahrzeit.UpdateZeit(ID,AutoID,RennstreckeID,fahrzeit,Timestamp);// warten bis die Update funktion aufgerufen wird mit den konstanten aus dem body
        res.redirect('/');                                     // Kehrt zurück auf die Main seite
    } catch (error) {
        console.error(error);                                  //wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
        console.log(`Error beim updaten der zeit`);
    }
}
async function createzeit(req,res){              //Funktion für Createzeit
    try {
        const {AutoID,RennstreckeID,fahrzeit,Timestamp} = req.body;// Die konstanten bekommen den wert aus dem body
        await Fahrzeit.CreateNewZeit(AutoID,RennstreckeID,fahrzeit,Timestamp);// warten bis die Create funktion aufgerufen wird mit den konstanten aus dem body
        res.redirect('/');                                     // Kehrt zurück auf die Main seite
    }catch (error){
        console.error(error)                                   //wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function deletezeit(req,res){              //Funktion für deletzeit
    try {
        const {ID} = req.body;                                 // Die konstante bekommet den wert aus dem body
        await Fahrzeit.DeleteZeit(ID);                         // warten bis die Deletestrecken Funktion aus der class aufgerufen wird mit der ID aus dem body
        res.redirect('/');                                     // Kehrt zurück auf die Main seite
    } catch (error) {
        console.error(error);                                  // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
        console.log(`Error deleting ${ID}`);
    }
}
async function login (req,res){                  // Funktion für das Erzeugen der Login Page
    try {
        const message = req.query.message|| '';         // massage den wert req.query.massage gebe ansonsten bleib er '' also leer
        res.render('login',{
            message:message                                    // Überabe von der message const
        });
    }catch (error){
        console.log(error)                                     // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function error_page(req,res){              //Funktion der ErrorPage
    res.render('Error');                                       // Error page erzeugen
}
async function loginUser(req,res){                 // Funktion für LoginUser
    const {Username, Passwort} = req.body;                     // Die konstanten bekommen den wert aus dem body
    const userexists = await azubi.Usernamecheck(Username);// warten bis die Usernamecheck Funktion aufgerufen wird mit der Konstante aus dem body
    const hashedpassword = await azubi.getpassword(Username);// warten bis die getpassword Funktion aufgerufen wird mit der Konstante aus dem body
    try {
        if (userexists === false){                             // if Abfrage für den Username
            return res.render('login',{                        // erzeugen der login seite mit der message
                message:'Username not found',
            })
        }
        const compare = await encrytion.logincheck(Passwort,hashedpassword.toString()) // warten bis die funktion logincheck aus der encrytion datei aufgerufen wird
        if (!compare){                                         // if Abfrage ob das passwort nicht korrekt ist
            return res.render('login',{                        // erzeugen der login seite mit der message
                message:'Password not correct',
            })
        }
        else{                                                  // wenn nicht zutrifft Kehrt man auf die Main seite zurück
            return res.redirect('/');
        }
    }catch (error){
        console.log(error)                                     // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function createUser(req,res){                // Funktion für den User create
    const {Username,Passwort,passwordconfirm} = req.body;      // Die konstanten bekommen den wert aus dem body
    try {
        const UserExists = await azubi.Usernamecheck(Username);// warten bis die Usernamecheck Funktion aufgerufen wird mit der Konstante aus dem body
        if (UserExists) {                                      // Wenn der User bereits exestiert wird die register seite mit der message erzeugt
            return res.render('register', {
                message: 'Username already taken',
            });
        }
        if(Passwort !== passwordconfirm){                      // Wenn das Eingegebene Passwort nicht mit der erneuten einagbe des Passworts übereinstimmt
            return res.render('register',{                     // Soll die register seite mit der message seite erzeugt werden
                message: 'Password not match'
            });
        }
        else{
            let hashedpassword = await encrytion.hashpassword(Passwort);// Wenn nichts eintrifft wird das Password gehashed
            await azubi.CreateNewUser('','','',hashedpassword,Username);// Der User wird Created
            return res.render('login',{                        // und die die login seite wird erzeugt mit der message
                message:'Successfully registered'
            });
        }

    }catch (error){
        console.log(error)                                     // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function searchauto(req,res){              // Funktion für die auto suche
    const {search} = req.body;                                 // Die konstante bekommet den wert aus dem body
    try {
        const Auto = await auto.getautobyid(search);      // warten bis die funktion getautobyid aufgerufen wird mit der übergebenen Konstante
        res.render('auto',{Auto});                             // die auto seite wird erzeugt mit dem wert das dass Auto bekommt
    }catch (error){
        console.log(error)                                     // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
async function searchazubi(req,res){             // Funktion der Azubi suche
    const {search} = req.body;                                 // Die konstante bekommet den wert aus dem body
    try {
        const Azubi = await azubi.getallAzubiById(search);// warten bis die funktion getallAzubibyid aufgerufen wird mit der übergebenen Konstante
        res.render('Azubi',{Azubi});                           // die Azubi seite wird erzeugt mit dem wert das dass Azubi bekommt
    }catch(error){
        console.log(error)                                     // wenn die try bedingung nicht erfüllt ist wird eine error in der console ausgegeben
    }
}
module.exports =                                               // Die Funktionen werden Exportiert um sie dann in anderen datein zu nutzen
    {
        index,
        login,
        error_page,
        register,
        createUser,
        loginUser,
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
        createzeit,
        searchauto,
        searchazubi
    }