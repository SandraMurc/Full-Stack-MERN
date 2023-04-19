const PersonsModel = require("../models/persons");

module.exports.listarPersons = async (request, response) => {
    var result = await PersonsModel.find();
    response.json(result);
}

module.exports.crearPersons = async (request, response) => {
    var data = request.body;
    
    var nuevaPerson = new PersonsModel(data);
    var result = await nuevaPerson.save();

    response.json(result);
}