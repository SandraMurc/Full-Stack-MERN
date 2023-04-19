const ProductosModel = require("../models/productos");

module.exports.listarProductos = async (request, response) => {
    var result = await ProductosModel.find();
    response.json(result);
}

module.exports.crearProductos = async (request, response) => {
    var data = request.body;
    
    var nuevoProducto = new ProductosModel(data);
    var result = await nuevoProducto.save();

    response.json(result);
}