import React from 'react'

// importar pacote Link que é parte do react-router-dom
import { Link } from 'react-router-dom'

import'./Header.css'
export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> - MENU </Link> </li>
                    <li> <Link to="/VillaDiCapri"> - VOLTAR </Link> </li>
                    <li> <Link to="#"> 3.2.3.1 CASAS </Link> </li>
                    <li> <Link to="#"> 3.2.3.2 APARTAMENTOS </Link> </li>
                    <li> <Link to="#"> 3.2.3.3 LAZER </Link> </li>
                    <li> <Link to="#"> 3.2.3.4 EDICULAS </Link> </li>
                    <li> <Link to="#"> 3.2.3.5 SOBRADOS </Link> </li> 
                </ul>
            </nav>
        </div>

    )
}