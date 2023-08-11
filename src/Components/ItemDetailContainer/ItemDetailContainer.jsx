import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../Services/config"

const ItemDetailContainer = () => {
    const [producto, setProductos]= useState(null);
    const {idItem} = useParams();

    useEffect( ()=>{
        const newDoc = doc (db, "productos", idItem);
        getDoc(newDoc)
          .then( res => {
            const data = res.data();
            const newProd= { id: res.id, ...data}
            setProductos(newProd)
          })
          
    }, [idItem] )

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer
