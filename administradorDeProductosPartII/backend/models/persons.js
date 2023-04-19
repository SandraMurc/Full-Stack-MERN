const mongoose = require('mongoose')

const PersonsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  lastName: {
    type: String,
    required: [true, 'El apellido  es obligatorio']
  },
  age: {
    type: Number,
    required: [true, 'La edad es obligatoria'],
    min: [0, 'No puede tener menos de 0 años de edad'],
    max: [120, 'Está muy viejita la persona']
  }
}, {timestamps: true})


const Persons = mongoose.model("persons", PersonsSchema);

module.exports = Persons
