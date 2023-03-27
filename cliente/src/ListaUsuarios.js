import React, { useEffect, useState } from "react";
import UsuarioIndividual from "./UsuarioIndividual";
import axios from 'axios'

function ListaUsuarios(){

    const[datausuarios, setdatausuarios]=useState([])

    useEffect(()=>{
        axios.get('api/usuario/obtenerusuarios').then(res => {
            console.log(res.data);
            setdatausuarios(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])

    // Mapear lista de usuario en objeto usuario
    const listausuarios = datausuarios.map(usuario =>{
    return(
        <div>
            <UsuarioIndividual usuario={usuario}></UsuarioIndividual>
        </div>
    )

    })

    return(
        <div>
            <h2>Lista de Usuarios</h2>
           {listausuarios}
        </div>
    )
}

export default ListaUsuarios