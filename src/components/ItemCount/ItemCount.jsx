import React, { useState } from 'react';
import './itemCount.css';

const ItemCount = ({ initial = 1, stock = 10, handleOnBuy }) => {
    const [qty, setQty] = useState(initial);
    
    const handleIncrement = () => {
        if (qty < stock) {
        setQty(qty + 1);
        }
    };
    
    const handleDecrement = () => {
        if (qty > 1) {
        setQty(qty - 1);
        }
    };
    
    const handleAddToCart = () => {
        handleOnBuy(qty);
    };
    
    return (
        <div className="item-count">
        <div className="count-controls">
            <button onClick={handleDecrement} disabled={qty <= 1}>
            -
            </button>
            <span>{qty}</span>
            <button onClick={handleIncrement} disabled={qty >= stock}>
            +
            </button>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
            Agregar al carrito
        </button>
        </div>
    );
};

export default ItemCount;
