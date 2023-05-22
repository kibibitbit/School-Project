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
    static async CreateNewZeit(RennstreckeID,Fahrzeit,Timestamp){
        try{
            await db.query('INSERT INTO fahrzeit (RennstreckeID,Fahrzeit,Timestamp) VALUES (?,?,?)', [RennstreckeID,Fahrzeit,Timestamp]);
            console.log('Die Fahrzeit wurde Erfolgreich Erstellt');
        }catch(error){
            console.log('Fehler beim Createn der Fahrzeit');
            console.log(error);
        }
    }
    static async UpdateZeit(ID,AutoID,Rennstrecke,Fahrzeit,Timestamp){
        try {
            await db.query('UPDATE fahrzeit SET AutoID =?,Rennstrecke=?,Fahrzeit=?,Timestamp=? WHERE ID = ?',[AutoID,Rennstrecke,Fahrzeit,Timestamp,ID]);
            console.log('Die fahrzeit mit der '+ID+' wurde Erfolgreich erneuert');
        }catch (error){
            console.log('Fehler beim erneuern der Fahrzeit');
            console.log(error);
        }
    }
    static async DeleteZeit(ID) {
        try {
            await db.query('DELETE FROM fahrzeit WHERE ID= ?',[ID]);
            console.log('Die Fahrzeit mit der ID '+ID+' wurde Erfolgreich gelöscht.');
        }catch (error){
            console.log('Die Fahrzeit konnte nicht gelöscht werden');
        }
    }
}

module.exports = Fahrzeit;