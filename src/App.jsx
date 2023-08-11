import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./Components/Context/CarritoContext";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout"
import Footer from "./Components/Footer/Footer";
import About from './Components/About/About'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />

        <Routes>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
      <About/>
      <Footer/>
    </>
  );
};

export default App;
