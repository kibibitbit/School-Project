const db = require('../Controller/db');

    class Azubi {
        constructor(ID,Vorname,Nachname,Mail,Passwort,Username) {
            this.ID = ID;
            this.Vorname = Vorname;
            this.Nachname = Nachname;
            this.Mail = Mail;
            this.Passwort = Passwort;
            this.Username = Username;
        }
        static async getalluser(){
            try{
                const rows = await db.query(`SELECT * FROM user`);
                const Users = [];

                rows.forEach(row => {
                    const user = new users(
                        row.FilmID,
                        row.FSK,
                        row.Description,
                        row.Titel,
                        row.Img,
                        row.Serienlink,
                        row.Statistik
                    );
                    Users.push(user);
                });
                return Users;
            } catch(error) {
                console.log('Fehler bei dem Abrufen der Daten: ', error);
            }
            }catch(error){
                console.error(error);
            }
    }