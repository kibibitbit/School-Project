"use strict"
const express = require('express');
const app = express();
const PublicRoutes = require('./app/routes/PublicRoutes');
const path = require("path");
const controller = require('./app/Controller/maincontroller');
const bodyParser = require("body-parser");

app.set('views', './views');
app.set('view engine','ejs');
app.use( express.static(path.join(__dirname,'app')));
app.use( express.static(path.join(__dirname,'views')));
app.use( express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(PublicRoutes);

const server = app.listen(3000,(req,res)=>{
    controller.index()
        .then(()=>{
            console.log(`Server Listening on http://localhost:3000`) //Hier wird die URL ausgegeben auf dem der Server gehostet wird
        })
        .catch((Error)=>{
            console.log(Error);// wenn der .then befehl nicht funktioniert wird er gecatched und ein error ausgegeben
            console.log('Fehler bei dem starten der Startseite');
        });
});
module.exports = server;