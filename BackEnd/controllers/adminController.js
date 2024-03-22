const jwt = require('jsonwebtoken'); // appelle du token

const admins = require('../models/adminModel')

//Connexion au Admin (authentification)
const endPoint =async (req, res) => {
    const { login , password } = req.body;
  
    // Récupérer l'utilisateur de la base de données
    const user = await admins.findOne({ login });
  
    if (!user) {
      return res.status(401).json({ message: 'Utilisateur introuvable' });
    }
   
    // Vérifier le mot de passe
    // const isValidPassword = await compare(password, user.password);
  
    if (password != user.password) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    // Si le login et le mot de passe sont valides, générer un token
    const secretKey = 'token'; // Clé secrète pour signer le token
    const payload = {
        userId: user._id, // Vous pouvez inclure d'autres données si nécessaire
        };
    const options = {
        expiresIn: '1h', // Le token expirera après 1 heure
        };
    const token = jwt.sign(payload, secretKey, options);

    // Envoi de la réponse avec le token
    res.status(200).json({ token });
  }


// Affiche  tous les admin
const getAllAdmin = async (req, res) => {
    const user = await admins.find({}).sort({ createdAt: -1 })
    res.status(200).json(user)
}

//récuperer un seul admin
const getAdmin= async (req, res) =>{
 
    try {
        const { id } = req.params
        const user = await admins.findById(id)

    if(!user) {
        res.status(404).json({ error: "User not found !"})
    } 
        res.status(200).json(user)
    }catch (error) {
        res.status(400).json({ error : error.message}) //Si y'a un Pb envoie le message d'erreru
    }
}

// Ajouter un new admin
const createAdmin = async (req, res) => {
    console.log(req.body)
    try {
        const { login , password } = req.body

        const user = await admins.create({ login , password })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//Mettre à jour un admin
const updateAdmin = async (req, res) =>{

    try {
        const { id } = req.params
        const { body } = req

        const user = await admins.updateOne({_id : id}, {$set : body})

        if(user.modifiedCount === 0){ //savoir si la modifiacation a été efectué
            res.status(404).json({ error: "User not found !"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error : error.message})
    }
}

//Suprimer un admin
const deleteAdmin = async (req, res) =>{

    try {
        const { id } = req.params

        const user = await admins.deleteOne({_id : id})

        if(user.deleteCount === 0){
            res.status(404).json({ error: "User not found !"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error : error.message})
    }
}

module.exports ={
    endPoint,
    getAllAdmin,
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
}