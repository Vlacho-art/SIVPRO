import React from 'react'
import '../../../shared/styles/content.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';

export const Content = () => {
const productos = [
      {
        id: 1,
        nombre: "Pepperoni",
        precioPersonal: "$ 14.000",
        precioGrande: "$ 18.000",
        imagen: "/img/pizza_peperoni.png",
        descripcion: "Una pizza con salsa de tomate casera, mozzarella fresca y pepperoni."
      },

      {
        id: 2,
        nombre: "Hawaiana",
        precioPersonal: "$ 14.000",
        precioGrande: "$ 18.000",
        imagen: "/img/pizza_hawaii.png",
        descripcion: "Una deliciosa combinación de salsa de tomate, mozzarella, jamón y piña."
      },

      {
        id: 3,
        nombre: "Pollo",
        precioPersonal: "$ 14.000",
        precioGrande: "$ 18.000",
        imagen: "/img/pizza_pollo.png",
        descripcion: "Pizza con salsa de tomate casera, mozzarella y tiernos trozos de pollo."
      },

      {
        id: 4,
        nombre: "Tocineta",
        precioPersonal: "$ 14.000",
        precioGrande: "$ 18.000",
        imagen: "/img/pizza_tocineta.png",
        descripcion: "Una pizza con salsa de tomate, mozzarella y trozos de tocineta."
      }
    ];
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
            <button className='button1'><ShoppingCartIcon className='icono-carrito' fontSize="small"/><a href="">Order ahora</a></button>
            <button className='button2'><a href="">Ver Menu Completo →</a></button>
          </div>
          <div className='info'>
              <div className='info-texto'>
                <h1 className='info-h1'>+5.200</h1>
                <p className='info-p'>Ventas entregadas</p>
              </div>
              <hr />
              <div className='info-texto'>
                <h1 className='info-h1'>25 min</h1>
                <p className='info-p'>Preparacion promedia</p>
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

        <div>
          <h1 className='seccion-roja-h1'>📦 +5.200</h1>
          <p className='seccion-roja-p'>Ventas entregadas</p>
        </div>
        <div>
          <h1 className='seccion-roja-h1'>⚡25 min</h1>
          <p className='seccion-roja-p'>Preparacion promedio</p>
        </div>
        <div>
          <h1 className='seccion-roja-h1'>🏆 30 años</h1>
          <p className='seccion-roja-p'>De tradición</p>
        </div>

      </section>

      {/* categorias */}
      <section className='categorias'>

        <h1 className='categorias-h1'>Nuestras categorías</h1>
        <p className='categorias-p'>Descubre todo lo que tenemos para ti</p>
        <div className='categorias-contenido'>
          <div className='card'>
            <span class="category-emoji">🍕</span>
            <p className='card-p'>Pizzas</p>
          </div>
          <div className='card'>
            <span class="category-emoji">🥤 </span>
            <p className='card-p'>Bebidas</p>
          </div>
          <div className='card'>
            <span class="category-emoji">🧇</span>
            <p className='card-p'>Lasañas</p>
          </div>
        </div>
      </section>

      {/* favoritos de los clientes */}
      <section className='favoritos'>
        <h1 className='favoritos-h1'>Las favoritas de nuestros clientes</h1>
        <a href="" className='favoritos-a'>Ver todas →</a>
        <div className='productos-contenedor'>
              {productos.map((producto) => (
            <div className="producto" key={producto.id}>

              <div className="seccion-img" style={{ backgroundImage: `url(${producto.imagen})` }}>
                <h1 className='img-h1'><StarIcon className='icono-StarIcon' fontSize="small"/>favorita</h1>
              </div>

              <div className='seccion-info'>
                <h2 className='producto-h2'>{producto.nombre}</h2>

              <p className='producto-p'>{producto.descripcion}</p>
              </div>

              <div className='seccion-precios'>
                <p className='producto-precio'>
                  {producto.precioPersonal.toLocaleString()}
                </p>

                <p className='producto-precio'>
                  {producto.precioGrande.toLocaleString()}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* nuestra historia */}
      <section className='nuestra-historia'>
        <div className='nuestra-historia-secciones'>
          <div className='nuestra-historia-img'>
            <div className='nuestra-historia-perfil'>
              <h2 className='nuestra-historia-perfil-h2'>G</h2>
              <div className='nuestra-historia-perfil-text'>
                <h1 className='nuestra-historia-perfil-h1'>Gloria Inés Vargas</h1>
                <p className='nuestra-historia-perfil-p'>Fundadora · La Sirena Pizza 1994</p>
              </div>
            </div>
          </div>
          <div className='nuestra-historia-text'>
            <p className='nuestra-historia-text-p1'>Nuestra historia</p>
            <h1 className='nuestra-historia-text-h1'>30 años de pasión por la pizza artesanal</h1>
            <p className='nuestra-historia-text-p2'>En 1994, Gloria Inés abrió La Sirena con una receta familiar y el sueño de compartir el mejor 
              sabor con Medellín. Hoy, tres décadas después, seguimos horneando cada pizza con el mismo amor
              de siempre.</p>
              <p className='nuestra-historia-text-p2'>Masa elaborada a mano, ingredientes seleccionados y el secreto inconfesable de 
              nuestra salsa artesanal. Eso es La Sirena.</p>
            <div className='nuestra-historia-text-a'>
              <button className='button-text-a1'><a className='text-a1' href="">🍕 Pedir ahora</a></button>
              <button className='button-text-a2'><a className='text-a2' href="">📞 Llamar</a></button>
            </div>
          </div>
        </div>
      </section>

      {/* porque la sirena */}
      <section className='porque-sirena'>

      </section>
      
    </main>
  )
}
