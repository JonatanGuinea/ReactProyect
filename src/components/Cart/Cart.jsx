import React from 'react';
import { useCartContext } from '../../context/cartContext';
import './cart.css'



const Cart = () => {
    const { cart, qtyItems, total, removeItem, clearCart } = useCartContext();


    return (
        <div className="cart">
            <h2>Tu Carrito</h2>
            <p>Cantidad de productos: {qtyItems}</p>
            <ul>
                {cart.length === 0 ? (
                    <li>Tu carrito está vacío.</li>
                ) : (
                    cart.map((item) => (
                        <li  className= 'cart-item' key={item.id}>
                            <img src={item.imgSrc} alt="" className='cart-img' />
                            <div className='description'><strong>{item.name}</strong> <span>Cantidad: {item.qty}</span> <span>Precio: ${item.price}</span> </div>
                            <button 
                                className="remove-item" 
                                onClick={() => removeItem(item.id, item.price, item.qty)}
                            >
                                Eliminar
                            </button>
                        </li>
                        ))
                )}

            </ul>
            <p><strong>Total: ${total.toFixed(2)}</strong></p>
            <button onClick = {clearCart}>Vaciar Carrito</button>
        </div>
    );
};


export default Cart;
