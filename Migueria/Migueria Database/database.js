const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('laMigueria.bd');

db.serialize(() =>{
    db.run(
        `CREATE TABLE usuarios(
            id INTEGER PRIMARY KEY,
            user text,
            password text,
            email text
        )`
    );
});

module.exports = db;