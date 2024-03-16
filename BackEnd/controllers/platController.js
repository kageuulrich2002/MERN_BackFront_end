const plats = require('../models/platModel')

// Affiche  tous les plat
const getAllPlat = async (req, res) => {
    const user = await plats.find({}).sort({ createdAt: -1 })
    res.status(200).json(user)
}

//récuperer un seul plat
const getPlat= async (req, res) =>{
 
    try {
        const { id } = req.params
        const user = await plats.findById(id)

    if(!user) {
        res.status(404).json({ error: "User not found !"})
    } 
        res.status(200).json(user)
    }catch (error) {
        res.status(400).json({ error : error.message}) //Si y'a un Pb envoie le message d'erreru
    }
}

// Ajouter un new plat
const createPlat = async (req, res) => {
    console.log(req.body)
    try {
        const { namePlat, originePlat, prix } = req.body

        const user = await plats.create({ namePlat, originePlat, prix })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//Mettre à jour un plat
const updatePlat = async (req, res) =>{

    try {
        const { id } = req.params
        const { body } = req

        const user = await plats.updateOne({_id : id}, {$set : body})

        if(user.modifiedCount === 0){ //savoir si la modifiacation a été efectué
            res.status(404).json({ error: "User not found !"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error : error.message})
    }
}

//Suprimer un plats
const deletePlat = async (req, res) =>{

    try {
        const { id } = req.params

        const user = await plats.deleteOne({_id : id})

        if(user.deleteCount === 0){
            res.status(404).json({ error: "User not found !"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error : error.message})
    }
}

module.exports ={
    getAllPlat,
    getPlat,
    createPlat,
    updatePlat,
    deletePlat
}