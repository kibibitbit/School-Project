"use strict"
const db = require('../controller/db');

class auto{
    constructor(ID,Name,TeamID,Typ) {
        this.ID = ID;
        this.Name = Name;
        this.TeamID = TeamID;
        this.Typ = Typ;
    }
    static async getallautos(){
        try {
            const rows = await db.query('SELECT * FROM auto');
            const Autos = [];

            rows.forEach(row => {
                const autos = new auto(
                    row.ID,
                    row.Name,
                    row.TeamID,
                    row.Typ
                );
                Autos.push(autos);
            });
            return Autos;
        } catch(error) {
            console.log('Fehler bei dem Abrufen der Daten: ', error);
        }
    }
}

module.exports = auto;