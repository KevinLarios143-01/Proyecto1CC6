const conn = require('../../config/database');

module.exports = app => {

    app.get("/solicitud/:solicitud",(req, res) => {
        let querys = `SELECT estado
                        FROM solicitud 
                        WHERE no_solicitud = '${req.params.solicitud}';`;
        conn.query(querys, (err, result) => {
            if (err) res.status(400).json({status: 0, message: "No se pudo obtener informacion"});
            else res.json({status: 1, message:"Bien", estatus : result.rows});
        })
    });

    app.get("/solicitudes/:orden",(req, res) => {

        let querys = `SELECT S.no_solicitud, E.nombre 
                        FROM solicitud S, estado E 
                        WHERE E.id_estado = S.estado AND no_solicitud = '${req.params.orden}';`;
        conn.query(querys, (err, result) => {
            if (err) res.status(400).json({status: 0, message: "No se pudo obtener informacion"});
            else res.json({status: 1, message:"Bien", estatus : result.rows});
        })
    });

    app.post("/solicitudes", (req, res) => {

        let no_solicitud=req.body.no_solicitud;
        let nombre_des=req.body.destinatario;
        let origen=req.body.origen;
        let destino=req.body.destino;
        let categoria=req.body.categoria;
        let direc=req.body.direccion;
        let remitente=req.body.tienda;
        let cosa=0,total=0;
        if(categoria==null || categoria=="" ){
            categoria=1;
        }
        if(origen==null || origen=="" ){
            origen="01000";
        }
        const id_que_toca = "SELECT count(*) AS ids FROM remitente;";
        conn.query(id_que_toca, (err, result) => {
            let id1 =result.rows;
            cosa = id1[0].ids;
            cosa++;
            const query_precio = "SELECT precio FROM categoria WHERE id_categoria=1;";
            conn.query(query_precio, (err, result) => {
                let precio1 =result.rows;
                total+=precio1[0].precio;    
                let query_precio2 = `SELECT precio FROM trayectoria WHERE cod_origen='01000' AND cod_destino='${destino}';`;
                conn.query(query_precio2, (err, result) => {
                    let precio2 =result.rows;
                    total+= precio2[0].precio;
                    let que = `INSERT INTO remitente (id_remitente, nombre, cod_postal) VALUES (${cosa},'${remitente}','${origen}');`;
                    que += `\nINSERT INTO destinatario (id_destinatario, direccion, nombre, cod_postal) VALUES (${cosa},'${direc}','${nombre_des}','${destino}');`;
                    que += `\nINSERT INTO solicitud (no_solicitud, total, remitente, destinatario, estado, categoria) VALUES (${no_solicitud},${total},${cosa},${cosa},1,${categoria});`;
                    //console.log(no_solicitud+" "+nombre_des+" "+origen+" "+destino+" "+categoria+" "+direc+" "+remitente+" total: "+total)
                    conn.query(que, (err, result) => {
                        if (err) res.status(500).json({status:0, message: "No se pudo insertar " + err});
                        else res.json({status:1, message: "Estado insertado correctamente"});
                    });
                });
            });
        });
    });

    app.put("/solicitudes/:orden", (req, res) => {
        let query = `UPDATE solicitud SET estado = '${req.body.estado}' WHERE no_solicitud = '${req.params.orden}'`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo modificar"});
            else res.json({status:1, message: "Estado modificado correctamente"});
        });
    });
}

