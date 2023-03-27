const mongoose = require('mongoose');


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack', {useNewUrlParser: true});

const objetobd = mongoose.connection

objetobd.on('connected', () =>{console.log('Conectado MongoDB')})

objetobd.on('error', () =>{console.log('33RROR Al conectar con MongoDB :0 ')})

module.exports = mongoose 
