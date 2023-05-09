"use strict"
const db = require('../controller/db');

class Rennstecke{
    constructor(ID,Name,Laenge) {
        this.ID = ID;
        this.Name = Name;
        this.laenge = laenge;
    }

    static async getallautos(){
        try {
            const rows = await db.query('SELECT * FROM rennstecke');
            const Rennstrecken = [];

            rows.forEach(row => {
                const rennstrecke = new Rennstrecke(
                    row.ID,
                    row.Name,
                    row.laenge
                );
                Rennstrecken.push(rennstrecke);
            });
            return Rennstrecken;
        } catch(error) {
            console.log('Fehler bei dem Abrufen der Daten: ', error);
        }
    }
}

module.exports = Rennstecke