"use strict"
const db = require('../controller/db');

class Rennstrecke{
    constructor(ID,Name,Laenge) {
        this.ID = ID;
        this.Name = Name;
        this.Laenge = Laenge;
    }

    static async getallautos(){
        try {
            const rows = await db.query('SELECT * FROM rennstrecke');
            const Rennstrecken = [];

            rows.forEach(row => {
                const rennstrecke = new Rennstrecke(
                    row.ID,
                    row.Name,
                    row.Laenge
                );
                Rennstrecken.push(rennstrecke);
            });
            return Rennstrecken;
        } catch(error) {
            console.log('Fehler bei dem Abrufen der Daten: ', error);
        }
    }
}

module.exports = Rennstrecke