import React, { useState } from "react";
import './productDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/cartContext";

const ProductDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCartContext();

    if (!product) {
        return null; 
        
    }

    const renderProductDetails = () => {
        if (!product.detail) return null;

        // Divide el string en líneas y remueve espacios en blanco
        const detailsArray = product.detail.trim().split("\n");

        return detailsArray.map((detail, index) => {
            const [key, ...rest] = detail.split(":");
            const value = rest.join(":").trim().replace(/["']/g, "");

            return (
                <p key={index}>
                    <strong>{key.trim().charAt(0).toUpperCase() + key.trim().slice(1)}:</strong> {value}
                </p>
            );
        });
    };

    const handleOnBuy = (qty) => {
        addToCart(product, qty);
    }

    return (
        <div className="product-detail">
            <img src={product.imgSrc} alt={product.name} />
            <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Precio: ${product.price}</p>
                <div>
                    <h3>Detalles del producto:</h3>
                    {renderProductDetails()}
                </div>
                <ItemCount handleOnBuy={handleOnBuy} />
            </div>
        </div>
    );
};

export default ProductDetail;
