const personsController = require("../controllers/persons.controller");

module.exports = (app) => {
    app.get("/persons/listar", personsController.listarPersons);
    app.post("/persons/crear", personsController.crearPersons);
    app.get('/api/people/:id', PersonController.getPerson);
    app.get('/api/people', PersonController.getAllPeople);
}


