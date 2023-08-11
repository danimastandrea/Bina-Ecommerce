import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"
import './Cart.css'
const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal}= useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
            <h2>no hay productos en el carrito</h2>
            <Link className="cardLink" to="/">Ver màs productos</Link>
            </>
        )
    }

  return (
    <section  className="containerCartItems">
        {carrito.map(producto=> <CartItem key={producto.id} {...producto} />)}
        <div className="containerCart">

        <h2>Total: ${total} </h2>
        <h5>Cantidad de Productos: {cantidadTotal} </h5>
        <button className="cardLink" onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
        <Link className="cardLink" to="/checkout">Finalizar Compra</Link>
        </div>
      
    </section>
  )
}

export default Cart
