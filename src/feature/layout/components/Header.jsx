import React from 'react'
import '../../../shared/styles/header.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NightsStayIcon from '@mui/icons-material/NightsStay';

export const Header = () => {
return (
    <header className='header'>

        {/* Seccion de logo en el lateral izquierdo del navbar */}
        <section className='header_logo'>
            <img className='logo' src="img/Logo.png" alt="S.I.V.Pro" />
            <div className='logo_text'>
                <h1>La Sirena</h1>
                <p>Pizza · desde 1994</p>
            </div>
        </section>

        {/* Seccion de los botones o redirreciones de la pagina  */}
        <section className='header_menu'>
            <div className='menu'>
                <ul> 
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Ver Menu</a></li>
                </ul>
            </div>
        </section>

        {/* Seccion de opciones del usuario */}
        <section className='header_opciones'>
            <div className='opciones'>
                <ul>
                    <li><a href="" className='carrito'><ShoppingCartIcon fontSize="small" />Carrito</a></li>
                    <li><a href="" className='sesion'>Iniciar sesion</a></li>
                    <li><a href="" className='oscuro'><NightsStayIcon fontSize="small" /></a></li>
                </ul>
            </div>
        </section>
    </header>
  )
}
    