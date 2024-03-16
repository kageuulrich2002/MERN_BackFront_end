const  express = require('express') // installation des modules Express
const router = express.Router() // utilisation du module de routage Express.
const {getAllUsers, getone, createUser, updateUser, deleteUser } =require('../controllers/userController')

//notre Api
router.get('/',getAllUsers) // affiche la bd "http://localhost:3000/users/"
router.get('/:id',getone) // affiche un user par id bd "http://localhost:3000/users/:id"
router.post('/',createUser) // cree user dans bd "http://localhost:3000/users/"
router.put('/:id',updateUser) // modifie user dans la bd "http://localhost:3000/users/:id"
router.delete('/:id',deleteUser) // suprime id la bd "http://localhost:3000/users/:id"

//Export de "const router".
module.exports = router