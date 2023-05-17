"use strict"
const db = require('../Controller/db');

class Fahrzeit {
    constructor(ID,AutoID,RennstreckeID,Fahrzeit,Timestamp) {
        this.ID = ID;
        this.AutoID = AutoID;
        this.RennstreckeID = RennstreckeID;
        this.Fahrzeit = Fahrzeit;
        this.Timestamp = Timestamp;
    }
    static async getallFahrzeit() {
        try {
            const rows = await db.query(`SELECT * FROM fahrzeit`);
            const Fahrzeiten = [];

            rows.forEach(row => {
                const fahrzeit = new Fahrzeit(
                    row.ID,
                    row.AutoID,
                    row.RennstreckeID,
                    row.Fahrzeit,
                    row.Timestamp
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