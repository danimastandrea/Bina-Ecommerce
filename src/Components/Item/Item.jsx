/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import './Item.css'


const Item = ({id, nombre, precio, img, stock}) => {
  return (
   
       <article className="cardsContainer">
    <div className="cardProductos">
        <img className="imgProductos" src={img}  alt="" />
        <h3>{nombre} </h3>
        <p>{precio} </p>
        <p>Stock:{stock} </p>
        <p>ID:{id} </p>
     <Link className="cardLink" to={`/item/${id}`}> ver detalles</Link>  
        
      
    </div>
       </article> 
   
  )
}

export default Item
