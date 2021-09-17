import React from 'react'

import'./MRV.css'
import Titulo from '../Titulo/Titulo.jsx'
import Header from '../Header/Header.jsx'

export default function Inicio() {
    return (
        <div className = "MRV">
            <Header/>
            <Titulo texto = "5 - MRV">  </Titulo>
        </div>
    )
}