import React, { useState } from "react";
import './productDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/cartContext";

const ProductDetail = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);
    
    
    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    // Funcion para renderizar los detalles del producto
    const renderProductDetails = () => {
        if (!product.detail) return null; 
        
        return Object.entries(product.detail).map(([key, value]) => (
            <p key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
                {Array.isArray(value) ? value.join(", ") : value}
            </p>
        ));
    };
    
    const {qtyItems, setQtyItems} = useCartContext()
    
    const handleOnBuy = (qty)=>{
        console.log(`Se agregaron ${qty} productos`);
        setQtyItems(qtyItems + qty)
        
    }

    return (
        <div className="product-detail">
            <img src={product.imgSrc} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <div>
                <h3>Detalles del producto:</h3>
                {renderProductDetails()}
            </div>

            <ItemCount handleOnBuy= {handleOnBuy}/>
 
        </div>
    );
};

export default ProductDetail;
