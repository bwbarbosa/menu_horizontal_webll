import React from 'react'

import { Link } from 'react-router-dom'

import './Header.css'
export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/Parra"> 1- PARRA </Link> </li>
                    <li> <Link to="/Projeto"> 2- PROJETO </Link> </li>
                    <li> <Link to="/Pacaembu"> 3- PACAEMBU </Link> </li>
                    <li> <Link to="/Perplan"> 4- PERPLAN </Link> </li>
                    <li> <Link to="/MRV"> 5- MRV </Link> </li>
                </ul>
            </nav>
        </div>

    )
}