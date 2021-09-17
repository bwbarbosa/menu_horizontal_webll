import React from 'react'

// importar pacote Link que é parte do react-router-dom
import { Link } from 'react-router-dom'

import'./Header.css'
export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> Voltar </Link> </li>
                    <li> <Link to="#"> 3.1 PARQUE UNIVERSITÁRIO </Link> </li>
                    <li> <Link to="/VillaDiCapri"> 3.2 VILLA DI CAPRI </Link> </li>
                    <li> <Link to="#"> 3.3 VITTA RESIDENCIAL </Link> </li>
                    <li> <Link to="#"> 3.4 QUINTA D' OESTE </Link> </li>
                    <li> <Link to="#"> 3.5 VIVA REAL </Link> </li>
                    
                </ul>
            </nav>
        </div>

    )
}