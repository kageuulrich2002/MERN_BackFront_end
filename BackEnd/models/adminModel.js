const mongoose = require('mongoose'); // utilisation du module Mongoose.

const adminSchema = mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
},
{timestamps: true} // enregistrer la date et modification des variable.
);

//Export de notre Schema.
module.exports = mongoose.model('admins', adminSchema);