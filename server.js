const express = require('express')
const app = express()

// importar conexion MongoDB
const archivoBD = require('./conexion')

// import del archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')

// Import body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario )



app.get('/', (req, res) => {
    res.end('Welcome servidor backend node.js')
})

//configurar server basico
app.listen(5000, function(){
    console.log('Server corriendo correctamente')

})