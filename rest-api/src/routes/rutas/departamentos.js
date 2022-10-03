const conn = require('../../config/database');

module.exports = app => {

    app.get("/departamentos",(req, res) => {

        let querys = "SELECT * FROM departamento";
        conn.query(querys, (err, result) => {
            if (err) res.status(400).json({status: 0, message: "No se pudo obtener informacion"});
            else res.json({status: 1, message:"Bien", estatus : result.rows});
        })
    });

    app.post("/departamentos", (req, res) => {
        let query = `INSERT INTO departamento (cod_postal, nombre) VALUES ('${req.body.cod_postal}','${req.body.nombre}');`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo insertar" + err});
            else res.json({status:1, message: "Estado insertado correctamente"});
        });
    });

    app.put("/departamentos/:id", (req, res) => {
        let query = `UPDATE departamento SET nombre = '${req.body.nombre}' WHERE cod_postal = ${req.params.id}`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo modificar"});
            else res.json({status:1, message: "Estado modificado correctamente"});
        });
    });

    app.delete("/departamentos/:id", (req, res) => {
        let query = `DELETE FROM departamento WHERE cod_postal = ${req.params.id}`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo eliminar"});
            else res.json({status:1, message: "Estado eliminado correctamente"}); 
        });
    });
}

