const mongoose = require('mongoose') // installation des modules express.
require('dotenv').config()// utilisation des variable d'environnement.
const server = process.env.MONGOBD
       
async function connectDB  ()  {
  try {
    await mongoose.connect(server)

    console.log('MongoDB connected!!')
  } catch (err) {
    console.log('Failed to connect to MongoDB', err)
  }
} 

//Export de notre bD.
module.exports={
    connectDB
} 