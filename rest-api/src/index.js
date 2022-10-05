const app = require('./config/server');

require("./routes/rutas/categorias")(app);
require("./routes/rutas/estados")(app);
require("./routes/rutas/departamentos")(app);
require("./routes/rutas/precios")(app);
require("./routes/rutas/solicitud")(app);
require("./routes/rutas/login")(app);

app.get('/', (req,res)=>{
    res.send('Welcome');
})
app.listen(app.get("port"), () => console.log("Servidor corriendo en puerto"))