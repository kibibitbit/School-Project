const db = require('../Controller/db');

class Azubi {
    constructor(ID,Vorname,Nachname,Klasse,Passwort) {
        this.ID = ID;
        this.Vorname = Vorname;
        this.Nachname = Nachname;
        this.Klasse = Klasse;
        this.Passwort = Passwort;
    }
    static async getallAzubi() {
        try {
            const rows = await db.query(`SELECT * FROM Azubi`);
            const Azubis = [];

            rows.forEach(row => {
                const azubi = new Azubi(
                    row.ID,
                    row.Vorname,
                    row.Nachname,
                    row.Klasse,
                    row.Passwort
                );
                Azubis.push(azubi);
            });
            return Azubis;
        } catch (error) {
            console.log('Fehler bei dem Abrufen der Daten: ', error);
        }
    }
}

module.exports = Azubi;