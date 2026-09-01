import React from 'react'
import '../../../shared/styles/content.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Content = () => {
  return (
    <main>

      {/* seccion principal de imagen de fondo */}
      <section className='logo-fondo'>
        <div className='descripcion'>
          <h2 className='descripcion-h2'>⭐ Artesanal · Medellín · Desde 1994</h2>
          <h1 className='descripcion-h1'>La Sirena</h1>
          <h1 className='rojo'>El sabor que</h1>
          <h1 className='descripcion-h1'>Conquista</h1>
          <p className='descripcion-p'>
            Pizzas artesanales horneadas con tradición familiar.
            Ingredientes frescos, masa propia y treinta años de amor.
          </p>
          <div className='botones'>
            <button className='button1'><ShoppingCartIcon className='icono-carrito' fontSize="small"/> Order ahora</button>
            <button className='button2'>Ver Menu Completo →</button>
          </div>
          <div className='info'>
              <div className='info-texto'>
                <h1 className='info-h1'>+5.200</h1>
                <p className='info-p'>Ventas entregadas</p>
              </div>
              <hr />
              <div className='info-texto'>
                <h1 className='info-h1'>25 min</h1>
                <p className='info-p'>Entrega promedia</p>
              </div>
              <hr />
              <div className='info-texto'>
                <h1 className='info-h1'>30 años</h1>
                <p className='info-p'>De tradicion</p>
              </div>
          </div>
        </div>
      </section>

      {/* cuadro rojo con tres informaciones */}
      <section className='seccion-roja'>

      </section>

      {/* categorias */}
      <section className='categorias'>

      </section>

      {/* favoritos de los clientes */}
      <section className='favoritos'>

      </section>

      {/* nuestra historia */}
      <section className='nuestra-historia'>

      </section>

      {/* porque la sirena */}
      <section className='porque-sirena'>

      </section>
      
    </main>
  )
}
