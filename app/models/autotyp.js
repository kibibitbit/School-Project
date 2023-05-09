"use strict"
const db = require('../controller/db');

class Autotyp{
    constructor(ID,Bezeichnung) {
        this.ID = ID;
        this.Bezeichnung = Bezeichnung;
    }

    static async getallautos(){
        try {
            const rows = await db.query('SELECT * FROM auto');
            const Autoypen = [];

            rows.forEach(row => {
                const autotyp = new Autotyp(
                    row.ID,
                    row.Bezeichnung
                );
                Autoypen.push(autotyp);
            });
            return Autoypen;
        } catch(error) {
            console.log('Fehler bei dem Abrufen der Daten: ', error);
        }
    }
}

module.exports = Autotyp