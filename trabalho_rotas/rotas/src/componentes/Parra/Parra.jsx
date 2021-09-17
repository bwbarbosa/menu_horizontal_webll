import React from 'react'

import'./Parra.css'
import Titulo from '../Titulo/Titulo.jsx'
import Header from '../Header/Header.jsx'

export default function Inicio() {
    return (
        <div className = "Parra">
            <Header/>
            <Titulo texto = "1 - Parra">  </Titulo>
        </div>
    )
}