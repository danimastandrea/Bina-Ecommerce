import { useState, useContext } from "react";
import { CarritoContext } from "../Context/CarritoContext"; 
import { db } from "../../Services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'
const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    //Funciones y validaciones: 

    const manejadorFormulario = (event) => {
        event.preventDefault();


      
        if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
            setError("Por favor completa todos los campos");
            return;
        }

        
        if (email !== emailConfirm) {
            setError("Los campos del email no coinciden, intente nuevamente");
            return;
        }

        //Objeto q almacena los datos de la compra.

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        //Actualizar Stock y generar orden de compra.

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })
               
            })
        )
            .then(() => {
                //Gardar en la BD.
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.log("Error al crear la orden", error);
                        setError("Error al crear la orden, por favor vuelva a intentarlo");
                    });
            })
            .catch((error) => {
                console.log("No se puede actualizar el stock", error);
                setError("No se puede actualizar el stock, intente en unos minutos");
            })

    }

    return (
        <section>
            
            <form className="inputContainer" onSubmit={manejadorFormulario}>
            <h2 > Finalizar Compra </h2>
                {
                    carrito.map(producto => (
                        <div className="containerProductForm" key={producto.item.id}>
                            <p> {producto.item.nombre} x  {producto.cantidad} </p>
                            <p> {producto.item.precio} </p>
                            <hr />

                        </div>
                    ))
                }
                <strong>Cantidad Total: {cantidadTotal} </strong>
                <hr />
            
                <div className="form-group">
                    <label htmlFor=""> Nombre </label>
                    <input className="inputCheck" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input className="inputCheck" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Telefono </label>
                    <input className="inputCheck" type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input className="inputCheck" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email Confirmación </label>
                    <input className="inputCheck" type="email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} />
                </div>
    
                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }
        
                <button id="formBtn" className="cardLink" type="submit"> Finalizar Compra </button>
                
            </form>
        
            {
                ordenId && (
                    <div className="confirmMsg">

                        <strong>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
                    </div>
                )
            }
        </section>
    )
}

export default Checkout