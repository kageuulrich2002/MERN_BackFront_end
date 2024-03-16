const  express = require('express') // installation des modules Express
const routerAdmin= express.Router() // utilisation du module de routage Express.
const {     getAllAdmin, getAdmin, createAdmin, updateAdmin, deleteAdmin } =require('../controllers/adminController')

//notre Api
routerAdmin.get('/',getAllAdmin) // affiche la bd "http://localhost:3000/admin/"
routerAdmin.get('/:id',getAdmin) // affiche un admin par id bd "http://localhost:3000/admin/:id"
routerAdmin.post('/',createAdmin) // cree admin dans bd "http://localhost:3000/admin/"
routerAdmin.put('/:id',updateAdmin) // modifie admin dans la bd "http://localhost:3000/admin/:id"
routerAdmin.delete('/:id',deleteAdmin) // suprime le admin la bd "http://localhost:3000/admin/:id"

//Export de "const router".
module.exports = routerAdmin