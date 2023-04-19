const productosController = require("../controllers/productos.controller");

module.exports = (app) => {
    app.get("/productos/listar", productosController.listarProductos);
    app.post("/productos/crear", productosController.crearProductos);
}