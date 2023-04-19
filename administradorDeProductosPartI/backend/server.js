// antes de cualquier acción para levantar el servidor hay que instalar npm
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/productos", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Se conectó correctamente a la bd"))
.catch(err => console.log("Hubo un error al conectarse a la bd"));

const app = express();
app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const productosRoutes = require("./routes/productos.routes");
productosRoutes(app);

const server = app.listen(8000, ()=>{
    console.log("Se levanto el servidor en el puerto 8000");
})