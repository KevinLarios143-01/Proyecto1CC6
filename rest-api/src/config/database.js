const {Client, Pool}= require('pg');
var fs = require('fs');
/*const conn = new Client({
    host: "SG-pj6-3965-pgsql-master.servers.mongodirector.com",
    user: "sgpostgres",
    password: "r0uSk1M-C2pyO7nP",
    database: "postgres",
    port: "5432",
});*/
/*const conn = new Pool({
    user: "sgpostgres",
    password: "r0uSk1M-C2pyO7nP",
    database: "postgres",
    host: "SG-pj6-3965-pgsql-master.servers.mongodirector.com", 
    port: 5432
});*/

const conn = new Client({
    user: "root",
    host: "localhost",
    database: "pj6",
    password: "1234",
    port: "5455",
});

conn.connect(err => {
    if (err) {
        console.log("Error al conectarse al servidor de DB: " + err);
    } else {
        console.log("Conectado a la DB satisfactoriamente");
    }
});

module.exports = conn;