const mongoose = require('mongoose'); // utilisation du module Mongoose.

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  sexe: { type: String, required: true }, 
},
{timestamps: true} // enregistrer la date et modification des variable.
);

//Export de notre Schema.
module.exports = mongoose.model('users', userSchema);