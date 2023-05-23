"use strict"
const db = require('../controller/db');

class Rennstrecke{
    constructor(ID,Name,Laenge) {
        this.ID = ID;
        this.Name = Name;
        this.Laenge = Laenge;
    }

    static async getallrennstrecken(){
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
    static async CreateNewStrecke(Name,Laenge){
        try{
            await db.query('INSERT INTO rennstrecke (Name,Laenge) VALUES (?,?)', [Name,Laenge]);
            console.log('Die rennstrecke wurde Erfolgreich Erstellt');
        }catch(error){
            console.log('Fehler beim Createn der rennstrecke');
            console.log(error);
        }
    }
    static async UpdateStrecke(Name,Laenge,ID){
        try {
            await db.query('UPDATE rennstrecke SET Name=?, Laenge=? WHERE ID = ?',[Name,Laenge,ID]);
            console.log('Die rennstrecke mit dem '+Name+' wurde Erfolgreich erneuert');
        }catch (error){
            console.log('Fehler beim erneuern der rennstrecke');
            console.log(error);
        }
    }
    static async DeleteStrecke(ID) {
        try {
            await db.query('DELETE FROM fahrzeit WHERE RennstreckeID = ?',[ID]);
            await db.query('DELETE FROM rennstrecke WHERE ID= ?',[ID]);
            console.log('Die rennstrecke mit der ID '+ID+' wurde Erfolgreich gelöscht.');
        }catch (error){
            console.log('rennstrecke konnte nicht gelöscht werden');
        }
    }
    static async Strecken(ID){
        try {
            const rows = await db.query('SELECT * FROM rennstrecke WHERE ID = ?',[ID]);
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