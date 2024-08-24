import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchProducts from "../utils/fetchProducts";
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        fetchProducts()
            .then((data) => {
                setProducts(data);
                setFilteredProducts(categoryId ? data.filter(product => product.category.toLowerCase() === categoryId) : data);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error,
                });
            });
    }, [categoryId]);

    return <ItemList products={filteredProducts} />;
}

export default ItemListContainer;
