const conn = require('../../config/database');

module.exports = app => {

    app.get("/estados",(req, res) => {

        let querys = "SELECT * FROM estatus";
        conn.query(querys, (err, result) => {
            if (err) res.status(400).json({status: 0, message: "No se pudo obtener informacion"});
            else res.json({status: 1, message:"Bien", estatus : result.rows});
        })
    });

    app.post("/estados", (req, res) => {
        let query = `INSERT INTO estatus (cod_status, estado) VALUES ('${req.body.id}','${req.body.estado}');`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo insertar"});
            else res.json({status:1, message: "Estado insertado correctamente"});
        });
    });

    app.put("/estados/:id", (req, res) => {
        let query = `UPDATE estatus SET estado = '${req.body.estado}' WHERE cod_status = ${req.params.id}`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo modificar"});
            else res.json({status:1, message: "Estado modificado correctamente"});
        });
    });

    app.delete("/estados/:id", (req, res) => {
        let query = `DELETE FROM estatus WHERE cod_status = ${req.params.id}`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo eliminar"});
            else res.json({status:1, message: "Estado eliminado correctamente"}); 
        });
    });
}

