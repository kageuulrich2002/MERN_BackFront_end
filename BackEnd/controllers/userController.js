const users = require('../models/usersModel')

// Affiche  tous les utilisateurs
const getAllUsers = async (req, res) => {
    const user = await users.find({}).sort({ createdAt: -1 })
    res.status(200).json(user)
}

//récuperer un seul Id
const getone = async (req, res) =>{
 
    try {
        const { id } = req.params
        const user = await users.findById(id)

    if(!user) {
        res.status(404).json({ error: "User not found !"})
    } 
        res.status(200).json(user)
    }catch (error) {
        res.status(400).json({ error : error.message}) //Si y'a un Pb envoie le message d'erreru
    }
}

// Ajouter un utilisateur
const createUser = async (req, res) => {
    console.log(req.body)
    try {
        const { name, age, sexe } = req.body

        const user = await users.create({ name, age, sexe })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//Mettre à jour un utilisateur
const updateUser = async (req, res) =>{

    try {
        const { id } = req.params
        const { body } = req

        const user = await users.updateOne({_id : id}, {$set : body})

        if(user.modifiedCount === 0){ //savoir si la modifiacation a été efectué
            res.status(404).json({ error: "User not found !"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error : error.message})
    }
}

//Suprimer un utilisateur
const deleteUser = async (req, res) =>{

    try {
        const { id } = req.params

        const user = await users.deleteOne({_id : id})

        if(user.deleteCount === 0){
            res.status(404).json({ error: "User not found !"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error : error.message})
    }
}

module.exports ={
    getAllUsers,
    getone,
    createUser,
    updateUser,
    deleteUser
}