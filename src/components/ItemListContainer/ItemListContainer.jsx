
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import fetchProducts from "../utils/fetchProducts.js";



function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [contador, setContador] = useState(0);

    useEffect(() => {
        fetchProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error,
                });
            });
    }, []);

    const clickMenos = () => {
        if (contador < 1) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No puedes seleccionar menos de 1",
            });
            return;
        }
        setContador(contador - 1);
    };

    const clickMas = () => {
        if (contador >= 10) {
            Swal.fire("No hay más Stock!");
            return;
        }
        setContador(contador + 1);
    };

    return (
        <>
            <h2>Productos</h2>
            <ItemList products={products} />

            <button onClick={clickMenos} type="button" className="btn btn-outline-danger">
                Quitar
            </button>

            <button type="button" className="btn btn-secondary">
                <span className="badge text-bg-secondary">{contador}</span>
            </button>

            <button onClick={clickMas} type="button" className="btn btn-outline-success">
                Agregar
            </button>
        </>
    );
}

export default ItemListContainer;
