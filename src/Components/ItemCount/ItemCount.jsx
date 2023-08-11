import { useState } from "react"
import './ItemCount.css';

// eslint-disable-next-line react/prop-types
const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador]= useState(inicial);

    const incrementar = ()=>{
        if (contador < stock){
            setContador (contador +1);
           funcionAgregar(contador + 1);
        }
    }

    const decrementar =()=>{
        if(contador > inicial){
            setContador (contador -1);
            funcionAgregar(contador - 1);
        }
    }
    
  return (
    <section className="cartBtns">
    <div>

        <button  onClick={incrementar}> + </button>
        <p className="textCount">{contador} </p>
        <button className="counterBtn" onClick={decrementar}> - </button>
    </div>
  
    <button className="cardLink" onClick={()=> funcionAgregar(contador)}>Agregar al carrito</button>
    
    </section>
  )
}

export default ItemCount
