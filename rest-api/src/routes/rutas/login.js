const conn = require('../../config/database');

module.exports = app => {
    app.get("/login",(req, res) => {
        let querys = "SELECT * FROM login";
        conn.query(querys, (err, result) => {
            if (err) res.status(400).json({status: 0, message: "No se pudo obtener informacion"});
            else res.json({status: 1, message:"Bien", login : result.rows});
        })
    });
}

