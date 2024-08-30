import React, { useState } from 'react';
import './itemCount.css';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({ initial = 1, stock = 10, handleOnBuy }) => {

    const navigate = useNavigate();
    const [qty, setQty] = useState(initial);
    const [itemAdded, setItemAdded] = useState(false)
    
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
        setItemAdded(true)
    }

    const handleGoToCart=()=>{
        setItemAdded(false)
        navigate('/cart')
    }
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

        
        {itemAdded ?(
                    <button className="add-to-cart" onClick={handleGoToCart}>
                    Checkout
                    </button>
            ): (
                    <button className="add-to-cart" onClick={handleAddToCart}>
                        Agregar al carrito
                    </button>)}
        
        </div>
    );
};

export default ItemCount;
