"use strict"
const db = require('../controller/db');

class Team{
    constructor(ID,Name) {
        this.ID = ID;
        this.Name = Name;
    }

    static async getallautos(){
        try {
            const rows = await db.query('SELECT * FROM team');
            const Teams = [];

            rows.forEach(row => {
                const team = new Team(
                    row.ID,
                    row.Bezeichnung
                );
                Teams.push(team);
            });
            return Teams;
        } catch(error) {
            console.log('Fehler bei dem Abrufen der Daten: ', error);
        }
    }
}

module.exports = Team;