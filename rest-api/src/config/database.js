const { Pool,Client } = require('pg');



const conn = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


conn.connect(err => {
    if (err) {
        console.log("Error al conectarse al servidor de DB: " + err);
    } else {
        console.log("Conectado a la DB satisfactoriamente");
    }
});
module.exports = conn;