"use strict"
const db = require('../controller/db');

class Auto{
    constructor(ID,Name,TeamID,Typ) {
        this.ID = ID;
        this.Name = Name;
        this.TeamID = TeamID;
        this.Typ = Typ;
    }
    static async getallautos(){
        try {
            const rows = await db.query('SELECT * FROM auto INNER JOIN auto ON autotyp.ID = auto.Typ INNER JOIN team ON auto.TeamID = team.ID');
            const Autos = [];

            rows.forEach(row => {
                const autos = new Auto(
                    row.ID,
                    row.Name,
                    row.TeamID,
                    row.Typ
                );
                Autos.push(autos);
            });
            return Autos;
        } catch(error) {
            console.log('Fehler bei dem Abrufen der Daten: ', error);
        }
    }
    static async CreateNewAuto(Name,Typ,TeamID){
        try{
            await db.query('INSERT INTO auto (Name,Typ,TeamID) VALUES (?,?,?)', [Name,Typ,TeamID]);
            console.log('Das Auto wurde Erfolgreich Erstellt');
        }catch(error){
            console.log('Fehler beim Createn des Autos');
            console.log(error);
        }
    }
    static async getautobyid(ID){
        try {
            const rows = await db.query('SELECT * FROM auto WHERE ID = ?',[ID]);
            const Autos = [];

            rows.forEach(row => {
                const autos = new Auto(
                    row.ID,
                    row.Name,
                    row.TeamID,
                    row.Typ
                );
                Autos.push(autos);
            });
            return Autos;
        } catch(error) {
            console.log('Fehler bei dem Abrufen der Daten: ', error);
        }
    }
    static async UpdateAuto(Name,TeamID,Typ,ID){
        try {
            await db.query('UPDATE auto SET Name=?, TeamID=?, Typ=? WHERE ID = ?',[Name,TeamID,Typ,ID]);
            console.log('Das Auto mit dem '+Name+' wurde Erfolgreich erneuert');
        }catch (error){
            console.log('Fehler beim erneuern des Autos');
            console.log(error);
        }
    }
    static async DeleteAuto(ID) {
        try {
            await db.query('DELETE FROM auto WHERE ID= ?',[ID]);
            console.log('Das Auto mit der ID '+ID+' wurde Erfolgreich gelöscht.');
        }catch (error){
            console.log('Das Auto konnte nicht gelöscht werden');
        }
    }

}

module.exports = Auto;