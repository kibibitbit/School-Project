"use strict"
const db = require('../controller/db');

class Teammitglied{
    constructor(ID,AzubiID,TeamID) {
        this.ID = ID;
        this.AzubiID = AzubiID
        this.TeamID = TeamID;
    }
    static async getallautos(){
        try {
            const rows = await db.query('SELECT * FROM teammitglied');
            const Teammitglieder = [];

            rows.forEach(row => {
                const teammitglied = new Teammitglied(
                    row.ID,
                    row.AzubiID,
                    row.TeamID
                );
                Teammitglieder.push(teammitglied);
            });
            return Teammitglieder;
        } catch(error) {
            console.log('Fehler bei dem Abrufen der Daten: ', error);
        }
    }
}

module.exports = Teammitglied;