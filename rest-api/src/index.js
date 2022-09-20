const app = require('./config/server');

require("./routes/rutas/categorias")(app);
require("./routes/rutas/estados")(app);



app.listen(app.get("port"), () => console.log("Servidor corriendo en puerto 3000"));