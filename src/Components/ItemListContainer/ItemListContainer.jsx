/* eslint-disable react/prop-types */
//imports para firebase
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../Services/config";


const ItemListContainer = (props) => {
 
  const [Productos, setProductos]= useState([]);
  const {idCategoria}= useParams();

  useEffect( ()=>{
    const misProductos = idCategoria ? query(collection (db, "productos"), where  ("idCat", "==", parseInt(idCategoria))) : collection (db, "productos") ;
     getDocs(misProductos)
      .then(res=>{
        const newProd= res.docs.map(doc =>{
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(newProd);
      })

  }, [idCategoria])


  return (
    <>   
   
    <h2>{props.greeting} </h2>
    <ItemList productos={Productos}/>
    </>
  )
}

export default ItemListContainer
