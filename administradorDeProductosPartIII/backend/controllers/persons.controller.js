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

module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

