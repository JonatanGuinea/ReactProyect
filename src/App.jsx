import React,{useContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { categories } from "./mock/mockData";
import Error from './components/Error/Error.jsx'
import CartContextProvider from "./context/cartContext.jsx";




function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar categories={categories} />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/product/:productId" element={<ItemDetailContainer />} />
                    <Route path="*" element={<Error></Error>} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App

