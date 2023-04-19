// ejecutar npm install antes de correr el proyecto backend

const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/productos", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Se conectó correctamente a la bd"))
.catch(err => console.log("Hubo un error al conectarse a la bd"));

const app = express();

// para leer datos de formulario
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(cors())

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const productosRoutes = require("./routes/productos.routes");
productosRoutes(app);
const personsRoutes = require("./routes/persons.routes");
personsRoutes(app);


// cuando se inicia el servidor
app.listen(8000, () => console.log("Ejecutando en el puerto 8000"))