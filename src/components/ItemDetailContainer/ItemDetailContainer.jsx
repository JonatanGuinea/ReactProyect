import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchProductById from "../utils/fetchProductsById";
import ProductDetail from "../ProductDetail/ProductDetail";
import Spinner from '../Spinner/Spinner';


function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        fetchProductById(productId)
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error,
                });
            });
    }, [productId]);

    return product ? <ProductDetail product={product} /> : <Spinner/>;
}

export default ItemDetailContainer;
