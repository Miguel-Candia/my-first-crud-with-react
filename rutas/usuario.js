const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)

module.exports = router

/*  RUTA DE EJEMPLO
router.get('/ejemplo', (req,res) => {
    res.end('Carga desde ruta example')
}) 
*/

// Obtenemos datos del formulario
router.post('/agregarusuario', (req,res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    // Guardamos en la bd
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario Agregado Correctamente')
        }else{
            res.send("Error3 :O   shit  "+err)
        }
    })
}) 

// OBTENEMOS tODOS LOS USUARIOS BD
router.get('/obtenerusuarios', (req,res) => {
    ModeloUsuario.find({}, function(docs,err){
        if(!err){
            res.send('se envian los docs encontrados: '+docs)
        }else{
            res.send(err)
        }
    })
}) 

// OBTENER DATA DE USUARIO
router.post('/obtenerdatausuario', (req,res) => {
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs,err){
        if(!err){
            res.send('se envian los docs encontrados: '+docs)
        }else{
            res.send(err)
        }
    })
}) 

// actualizar usuario
router.post('/actualizausuario', (req,res) => {
    ModeloUsuario.findOneAndUpdate({idusuario: req.body.idusuario},{
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) => {
        if(!err){
            res.send('USUARIO  actualizada correctamente')
        }else{
            res.send(err)
        }
    })
}) 
 // Borrar usuario
router.post('/borrarusuario', (req,res) => {
    ModeloUsuario.findOneAndDelete({idusuario: req.body.idusuario}, (err) => {
        if(!err){
            res.send('USUARIO Borrado correctamente')
        }else{
            res.send(err)
        }
      
    })
}) 