/* eslint-disable react/prop-types */
import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"

const CartItem = ({item, cantidad}) => {
     const {eliminarProducto}= useContext (CarritoContext);


  return (
    <div className="containerCart">
      <h2>{item.nombre} </h2>
      <h3>${item.precio} </h3>
      <p>Cantidad:{cantidad} </p>
      <button className="cardLink" onClick={()=> eliminarProducto(item.id)}>Eliminar Producto</button>
    </div>
  )
}

export default CartItem
