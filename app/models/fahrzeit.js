"use strict"
const db = require('../Controller/db');

class Fahrzeit {
    constructor(ID,AutoID,RennstreckeID,Fahrzeit,Timespec) {
        this.ID = ID;
        this.Vorname = RennstreckeID;
        this.Nachname = Fahrzeit;
        this.Klasse = Timespec;
    }
    static async getallAzubi() {
        try {
            const rows = await db.query(`SELECT * FROM fahrzeit`);
            const Fahrzeiten = [];

            rows.forEach(row => {
                const fahrzeit = new Fahrzeit(
                    row.ID,
                    row.Vorname,
                    row.Nachname,
                    row.Klasse,
                    row.Passwort
                );
                Fahrzeiten.push(fahrzeit);
            });
            return Fahrzeiten;
        } catch (error) {
            console.log('Fehler bei dem Abrufen der Daten: ', error);
        }
    }
}

module.exports = Fahrzeit;