/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount'
import { CarritoContext } from "../Context/CarritoContext";
import { useContext } from "react";
import './ItemDetail.css'


const ItemDetail = ({id, nombre, precio, img, stock}) => {

  const [agregarCantidad, setAgregarCantidad]= useState(0);

   const {agregarProducto}= useContext(CarritoContext);

    const manejadorCantidad=(cantidad)=>{
      setAgregarCantidad(cantidad);
      const item={id, nombre, precio};
      agregarProducto(item, cantidad);
    }

  return (
    <section className="itemSection">
    <div className="itemContainer">
      <h2>{nombre} </h2>
      <h3>{precio} </h3>
      <h3>id:{id} </h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, amet? Quidem numquam velit fuga quia impedit corrupti aperiam quae earum, magni voluptates, nostrum aut! Molestias, nihil iste. Voluptate, voluptatibus aperiam.</p>
      <img src={img} alt="" />
      {
        
        agregarCantidad >0 ? (<Link  className="cardLink" to ="/cart">Terminar compra</Link>) : (<ItemCount inicial ={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }
    </div>
    </section>
  )
}

export default ItemDetail
