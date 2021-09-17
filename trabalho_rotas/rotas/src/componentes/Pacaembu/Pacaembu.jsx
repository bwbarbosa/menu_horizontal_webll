import React from 'react'

import'./Pacaembu.css'
import Titulo from '../Titulo/Titulo.jsx'
import Header from '../Header/Header.jsx'

export default function Inicio() {
    return (
        <div className = "Pacaembu">
            <Header/>
            <Titulo texto = "3 - Pacaembu">  </Titulo>
        </div>
    )
}