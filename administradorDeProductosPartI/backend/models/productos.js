const mongoose = require("mongoose");

const ProductosSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    cantidad: Number
});

const Productos = mongoose.model("productos", ProductosSchema);
module.exports = Productos;