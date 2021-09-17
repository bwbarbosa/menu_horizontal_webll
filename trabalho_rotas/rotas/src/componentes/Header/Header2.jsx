import React from 'react'

// importar pacote Link que é parte do react-router-dom
import { Link } from 'react-router-dom'

import'./Header.css'
export default function Header2() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> - MENU </Link> </li>
                    <li> <Link to="/Pacaembu"> - VOLTAR </Link> </li>
                    <li> <Link to="#"> 3.2.1 CORRETORES </Link> </li>
                    <li> <Link to="#"> 3.2.2 FINANCIAMENTO </Link> </li>
                    <li> <Link to="/ProjetosModelo"> 3.2.3 PROJETOS MODELO </Link> </li>
                    <li> <Link to="#"> 3.2.4 INVESTIMENTOS </Link> </li> 
                </ul>
            </nav>
        </div>

    )
}