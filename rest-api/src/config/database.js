const { Pool,Client } = require('pg');

const conn = new Pool({
    user: "root",
    password: "1234",
    database: "pj",
    host: "localhost", 
    port: 5433
});


conn.connect(err => {
    if (err) {
        console.log("Error al conectarse al servidor de DB: " + err);
    } else {
        console.log("Conectado a la DB satisfactoriamente");
    }
});
module.exports = conn;