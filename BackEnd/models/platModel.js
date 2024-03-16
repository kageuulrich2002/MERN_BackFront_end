const mongoose = require('mongoose'); // utilisation du module Mongoose.

const platSchema = mongoose.Schema({
  namePlat: { type: String, required: true },
  originePlat: { type: String, required: true },
  prix: { type: Number, required: true }, 
},
{timestamps: true} // enregistrer la date et modification des variable.
);

//Export de notre Schema.
module.exports = mongoose.model('plats', platSchema);