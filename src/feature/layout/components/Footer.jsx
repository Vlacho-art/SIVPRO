import React from 'react'
import '../../../shared/styles/footer.css'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Footer = () => {
  return (
    <footer className='footer'>

      {/* parte superior del Footer */}
      <main className='superior'>

        {/* 1 descripcion peqieña de la sirena  */}
        <section className='descripcion'>         
          <h1><img className='logo' src="img/logo-blanco.png" alt="S.I.V.Pro" />La Sirena Pizza</h1> 
          <div>
            <p>Desde 1994 horneando las mejores pizzas artesanales de medellin con receta familiar y amor autentico</p>
          </div>
        </section>

        {/* 2 Contactanos */}
        <section className='contacto'>
        <h1>Contactanos</h1>
                <ul>
                    <li><LocalPhoneIcon fontSize="small" sx={{ marginRight: '10px' }} /> 604 234 5678</li>
                    <li><MailIcon fontSize="small" sx={{ marginRight: '10px' }} /> info@lasirena.com.co</li>
                    <li><LocationOnIcon fontSize="small" sx={{ marginRight: '10px' }} /> Cra. 45 #104-30, Laureles medellin</li>
                </ul>
        </section>

        {/* 3 hoar de atencion  */}
        <section className='horario'>
          <h1>Horario de atención</h1>
            <div className='atencion'>
              <div>
                  <h2>Lunes - Miercoles</h2>
                  <h2>Jueves - Domingo</h2>
              </div>
              <div>
                  <h3>Cerrado</h3>
                  <h3>4:00 pm - 10:00 pm</h3>
              </div>
            </div>
            <hr />
            <p>Solo pedidos presenciales en local</p>
        </section>
      </main>
      <hr />

      {/* parte inferior del Footer */}
      <section className='inferior'>

        <h2>© 2026 La Sirena Pizza · Medellin, Colombia · Desde 1994</h2>

        <h2>NIT: 900.123.456-7. Establecimiento de comercio registrado</h2>

      </section>

    </footer>
  )
}
