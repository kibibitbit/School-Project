"use strict"
const db = require('../controller/db');

class auto{
    constructor(ID,Name,TeamID,Typ) {
        this.ID = ID;
        this.Name = Name;
        this.TeamID = TeamID;
        this.Typ = Typ;
    }
}