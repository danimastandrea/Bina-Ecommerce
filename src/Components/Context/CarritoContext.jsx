import {useState, createContext } from 'react';

//crear un nuevo contexto
export const CarritoContext= createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

//componente para proveer el contexto
// eslint-disable-next-line react/prop-types
export const CarritoProvider= ({children}) =>{
     const [carrito, setCarrito]= useState([]);
     const [total, setTotal] = useState(0);
     const [cantidadTotal, setCantidadTotal]= useState(0);
     //metodos para manipular el carrito
    
     const agregarProducto=(item, cantidad)=>{
        const productoExistente= carrito.find(prod=> prod.item.id === item.id);
        if(!productoExistente) {
           setCarrito(prev => [...prev, {item, cantidad}]);
           setCantidadTotal(prev=> prev + cantidad);
           setTotal(prev=> prev +(item.precio * cantidad));
           //prev => [...prev, {item, cantidad} se utilixa para crear un nuevo array a partir del estado anterior del carrito y agregar un nuevo objeto a representa el nuevo producto.

        } else{
            const carritoActualizado = carrito.map( prod=>{
                if( prod.item.id === item.id){
                    return{ ...prod, cantidad: prod.cantidad + cantidad };
                } else{
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev=> prev+cantidad);
            setTotal(prev=> prev + (item.precio*cantidad));
        }

     }

     //funcion para eliminar producto

     const eliminarProducto=(id)=>{
        const productoEliminado = carrito.find (prod=> prod.item.id===id);
        const carritoActualizado = carrito.filter( prod=> prod.item.id !==id);

        setCarrito(carritoActualizado);
        setCantidadTotal(prev=> prev - productoEliminado.cantidad);
        setTotal(prev=> prev - (productoEliminado.item.precio * productoEliminado));

     }

     //funcion para vaciar el carrito

     const vaciarCarrito=()=>{
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
     }  

     return(
        //en el value esta el valor actual y los metodos, a los compoentes que lo necesiten.
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito, total, cantidadTotal}}>
          {children}
         </CarritoContext.Provider>
     )
}