import React from 'react'

import'./Inicio.css'
import Titulo from '../Titulo/Titulo.jsx'
import Header from '../Header/Header.jsx'

export default function Inicio() {
    return (
        <div>
            <Header/>
            <Titulo texto = "Empreendimentos Imobiliários">  </Titulo>
        </div>
    )
}