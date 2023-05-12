"use strict"
// Importieren des "mysql2" Moduls
const mysql = require('mysql2');

// Importieren der Datenbankkonfiguration aus der "config.js"-Datei
const config = require('./config');

// Erstellen einer Verbindungspool-Konfiguration mit der Datenbankkonfiguration
const pool = mysql.createPool({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Erstellen eines Promisified-Pools für die Verwendung von async/await
const promisePool = pool.promise();

module.exports = {
    // Diese Funktion führt eine SQL-Abfrage mit den angegebenen Parametern aus
    // und gibt ein Promise zurück, das die Ergebnisse der Abfrage enthält.
    //
    // text: Der SQL-Text der Abfrage, zum Beispiel 'SELECT * FROM team WHERE id = ?'
    // params: Ein Array von Werten, die den Platzhaltern im SQL-Text entsprechen, zum Beispiel [1]
    query: async (text, params) => {
        try {
            const [rows] = await promisePool.query(text, params);
            return rows;
        } catch (err) {
            console.error('Fehler bei der Datenbankabfrage:', err);
            throw err;
        }
    }
};