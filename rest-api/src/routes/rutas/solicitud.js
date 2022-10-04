const conn = require('../../config/database');

module.exports = app => {

    app.get("/solicitudes",(req, res) => {

        let querys = "SELECT * FROM solicitud";
        conn.query(querys, (err, result) => {
            if (err) res.status(400).json({status: 0, message: "No se pudo obtener informacion"});
            else res.json({status: 1, message:"Bien", estatus : result.rows});
        })
    });

    app.post("/solicitudes", (req, res) => {

        var no_sol=req.body.orden;
        var nombre_des=req.body.destinatario;
        var destino=req.body.destino;
        var direc=req.body.direccion;
        var remitente=req.body.tienda;
        let query = `INSERT INTO remitente (id_remitente, nombre, cod_postal) VALUES (default,'${remitente}','01000');`;
        query += `\nINSERT INTO destinatario (id_destinatario, direccion, nombre, cod_postal) VALUES (default,'${direc}','${nombre_des}','${destino}');`;
        //query += `\nINSERT INTO solicitud (no_sol, nombre) VALUES ('${req.body.cod_postal}','${req.body.nombre}');`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo insertar" + err});
            else res.json({status:1, message: "Estado insertado correctamente"});
        });
    });

    app.put("/solicitudes/:id", (req, res) => {
        let query = `UPDATE solicitud SET nombre = '${req.body.nombre}' WHERE cod_postal = ${req.params.id}`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo modificar"});
            else res.json({status:1, message: "Estado modificado correctamente"});
        });
    });

    app.delete("/solicitudes/:id", (req, res) => {
        let query = `DELETE FROM solicitud WHERE cod_postal = ${req.params.id}`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo eliminar"});
            else res.json({status:1, message: "Estado eliminado correctamente"}); 
        });
    });
}

