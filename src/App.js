import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./CartContext/CartContext";
import { Cart } from "./components/Cart/Cart";


function App() { //componente tipo funcion

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:id" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}


export default App;