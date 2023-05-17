const db = require('../Controller/db');

class Azubi {
    constructor(ID,Username,Vorname,Nachname,Klasse,Passwort) {
        this.ID = ID;
        this.Username = Username;
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
                    row.Username,
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
    static async getpassword(Username){
        try {
            await db.query('SELECT Passwort FROM azubi WHERE Username = ?',[Username])
        }catch(error){
            console.log(error)
        }
    }
    static async CreateNewUser(Vorname,Nachname,Klasse,Passwort,Username){
        try{
            await db.query('INSERT INTO azubi (Vorname,Nachname,Klasse,Passwort,Username) VALUES (?,?,?,?,?)', [Vorname,Nachname,Klasse,Passwort,Username]);
            console.log('Successful Register');
        }catch(error){
            console.log('Fehler beim erstellen des users');
            console.log(error);
        }
    }
    static async Usernamecheck(Username){
        try {
            const result = await db.query('SELECT * FROM azubi WHERE Username = ?', [Username]);
            return result.length > 0;
        } catch (error) {
            console.log(error);
        }
    }
    static async cheackloginuser(Passwort,Username){
        try {
        }catch (error){
            console.log(error)
        }
    }
}

module.exports = Azubi;