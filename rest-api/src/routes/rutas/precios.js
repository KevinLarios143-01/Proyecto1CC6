const conn = require('../../config/database');

module.exports = app => {

    app.get("/precios",(req, res) => {

        let querys = `SELECT * FROM trayectoria`;
        conn.query(querys, (err, result) => {
            if (err) res.status(400).json({status: 0, message: "No se pudo obtener informacion"});
            else res.json({status: 1, message:"Bien", estatus : result.rows});
        })
    });
    app.get("/precios/:des",(req, res) => {

        let querys = `SELECT * FROM trayectoria WHERE cod_origen = '01001' AND cod_destino = '${req.params.des}'`;
        conn.query(querys, (err, result) => {
            if (err) res.status(400).json({status: 0, message: "No se pudo obtener informacion"});
            else res.json({status: 1, message:"Bien", estatus : result.rows});
        })
    });

    app.post("/precios", (req, res) => {
        let query = `INSERT INTO trayectoria (cod_origen, cod_destino, precio) VALUES ('${req.body.cod_origen}','${req.body.cod_destino}','${req.body.precio}');`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo insertar" + err});
            else res.json({status:1, message: "Estado insertado correctamente"});
        });
    });

    app.delete("/precios/:or&:des", (req, res) => {
        let query = `DELETE FROM trayectoria WHERE cod_origen = '${req.params.or}' AND cod_destino = '${req.params.des}' `;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo eliminar"});
            else res.json({status:1, message: "Estado eliminado correctamente"}); 
        });
    });
}

