//Importation de Mongoose :
const mongoose = require('mongoose');

//Importation de dotenv pour les variables d'environement :
const dotenv = require("dotenv").config();

//Conection de mongoDB à l'API grâce à mongoose :
mongoose.connect(`mongodb+srv://p6-piquante:ca8v1OrQMmdSgN3W@cluster0.1rw0dxd.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB c\'est connecté avec succée !'))
    .catch(() => console.log('MongoDB n\'est pas connecté !'))

    
//Exportation mongoose :    
module.exports = mongoose;