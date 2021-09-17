import React from 'react'

import'./Perplan.css'
import Titulo from '../Titulo/Titulo.jsx'
import Header from '../Header/Header.jsx'

export default function Inicio() {
    return (
        <div className = "Perplan">
            <Header/>
            <Titulo texto = "4 - Perplan">  </Titulo>
        </div>
    )
}