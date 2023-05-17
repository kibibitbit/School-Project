"use strict"
const express = require('express');
const app = express();
const PublicRoutes = require('./app/routes/PublicRoutes');
const Privateroutes = require('./app/routes/PrivateRoutes');
const path = require("path");
const bodyParser = require("body-parser");

app.set('views', './views');
app.set('view engine','ejs');
app.use( express.static(path.join(__dirname,'views')));
app.use( express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',PublicRoutes);
app.use('/auth/',Privateroutes);

const server = app.listen(3000,(req,res)=>{
    try {
        console.log(`Server Listening on http://localhost:3000`)
    }catch (error){
        console.error(error)
        console.log('Fehler beim Starten der seite')
    }
});
module.exports = server;