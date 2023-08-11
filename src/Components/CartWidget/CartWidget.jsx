import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../Context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext (CarritoContext);
    const imgCarrito= 'https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png';

  return (
    <div>
      <Link to="/cart">
      <img className='imgCarrito' src={imgCarrito} alt="" />
     {
      cantidadTotal > 0 && <p className='counterCarrito'> {cantidadTotal} </p> 
      
     }
      </Link>
    </div>
  )
}

export default CartWidget
