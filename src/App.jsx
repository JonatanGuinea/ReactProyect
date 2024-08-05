import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { categories } from "./mock/mockData";

function App() {
    return (
        <Router>
            <NavBar categories={categories} />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/product/:productId" element={<ItemDetailContainer />} />
            </Routes>
        </Router>
    );
}

export default App;

