//export des module.
const express = require('express') // installation des modules express.
require('dotenv').config() // utilisation des variable d'environnement.
const {  connectDB } = require('./models//dB'); //aplle de la BD.
const  usersRoute = require('./routes/userRoute') // api user
const  platRoute = require('./routes/platRoute') //api plat
const  adminRouter = require('./routes/adminRouter') //api admin
var cors = require("cors");  //secoudre les pb appelle d'Api.

//variable du server
const app = express()
const PORT = process.env.PORT || 2024 //('affiche la route', 'affiche le type de resquett' ).
connectDB().catch(err=> console.log(err)); //Affiche si t'a une error lors de la Connexion avec la BD.

//affiche des Middelware.
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})
app.use(express.json()) // pour lire les doc Json.
app.use(cors());  // activation des cors pour toutes les requêtes 

//appelle de nos different routes.
app.use('/users', usersRoute)
app.use('/plats', platRoute)
app.use('/admin', adminRouter)

//lancement du server.
app.listen(PORT, ()=>console.log(`Serveur lancé sur le port: ${PORT}`))  