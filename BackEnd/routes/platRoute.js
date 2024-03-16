const  express = require('express') // installation des modules Express
const routerPlat= express.Router() // utilisation du module de routage Express.
const { getAllPlat, getPlat,  createPlat, updatePlat, deletePlat } =require('../controllers/platController')

//notre Api
routerPlat.get('/',getAllPlat) // affiche la bd "http://localhost:3000/plats/"
routerPlat.get('/:id',getPlat) // affiche un plat par id bd "http://localhost:3000/plats/:id"
routerPlat.post('/',createPlat) // cree plat dans bd "http://localhost:3000/plats/"
routerPlat.put('/:id',updatePlat) // modifie plat dans la bd "http://localhost:3000/plats/:id"
routerPlat.delete('/:id',deletePlat) // suprime le plat la bd "http://localhost:3000/plats/:id"

//Export de "const router".
module.exports = routerPlat