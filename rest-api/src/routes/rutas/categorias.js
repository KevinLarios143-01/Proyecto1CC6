const conn = require('../../config/database');

module.exports = app => {

    app.get("/categorias",(req, res) => {

        let querys = "SELECT * FROM categoria";
        conn.query(querys, (err, result) => {
            if (err) res.status(400).json({status: 0, message: "No se pudo obtener informacion"});
            else res.json({status: 1, message:"Bien", categorias : result.rows});
        })
    });

    app.post("/categorias", (req, res) => {
        let query = `INSERT INTO categoria (id_categoria, nombre, precio) VALUES ('${req.body.id_categoria}','${req.body.nombre}','${req.body.precio}');`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo insertar" +err});
            else res.json({status:1, message: "Categoria insertada correctamente"});
        });
    });

    app.put("/categorias/:id", (req, res) => {
        let query = `UPDATE categoria SET nombre = '${req.body.nombre}', precio = '${req.body.precio}' where id_categoria = ${req.params.id}`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo modificar"});
            else res.json({status:1, message: "Categoria modificada correctamente"});
        });
    });

    app.delete("/categorias/:id", (req, res) => {
        let query = `DELETE FROM categoria WHERE id_categoria = ${req.params.id}`;
        conn.query(query, (err, result) => {
            if (err) res.status(500).json({status:0, message: "No se pudo eliminar"});
            else res.json({status:1, message: "Categoria eliminada correctamente"}); 
        });
    });
}

