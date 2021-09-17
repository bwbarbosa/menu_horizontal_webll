import React from 'react'

import'./Projeto.css'
import Titulo from '../Titulo/Titulo.jsx'
import Header from '../Header/Header.jsx'

export default function Inicio() {
    return (
        <div className = "Projeto">
            <Header/>
            <Titulo texto = "2 - Projeto">  </Titulo>
        </div>
    )
}