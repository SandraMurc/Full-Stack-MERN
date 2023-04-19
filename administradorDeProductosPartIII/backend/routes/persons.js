const personsController = require("../controllers/persons.controller");

module.exports = (app) => {
    app.get("/persons/listar", personsController.listarPersons);
    app.post("/persons/crear", personsController.crearPersons);
    app.get('/api/person/:id', PersonController.getPerson);
    app.get('/api/person', PersonController.getAllPeople);
    app.put('/api/person/:id', PersonController.updatePerson);
    app.delete('/api/person/:id', PersonController.deletePerson);
}


