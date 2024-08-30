import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { useState } from "react";
import './cart.css'
import {db} from '../../firebase/dbConnection'
import { collection, addDoc } from 'firebase/firestore';



const Cart = () => {
    const { cart, qtyItems, total, removeItem, clearCart } = useCartContext();

    const [formData, setFormData] = useState()

    const handleOnChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSaveCart=()=>{
        console.log('saving in database');
        console.log('formdata', formData );
        console.log('cart', cart );
        
        const ordersCollection =collection(db,'orders')
        const newOrder = {
            buyer: formData,
            items: cart,
            date: new Date(),
            total:total

        }

        addDoc(ordersCollection, newOrder)
        .then((doc)=>{
            console.log('Order saved with id: '+ doc.id);
            Swal.fire({
                title: "Compra realizada con éxito  ID: " +doc.id ,
                icon:'success',
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                    `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                    `
                }
                });
            setFormData({name:" ", cel:" ", email:" "})
            clearCart()
            
        })
        .catch((error)=>{
            console.error('Error adding document: ', error);
            
        })
    }


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
        
        <div className= 'finalizar-compra'>
            <input type="text" name="name" id="name" placeholder="Ingrese su nombre" onChange={(e)=>{handleOnChange(e)}} />
            <input type="number" name="cel" id="cel" placeholder='Ingrese su numero de celular' onChange={(e)=>{handleOnChange(e)}}/>
            <input type="email" name="email" id="email" placeholder='Ingrese su email' onChange={(e)=>{handleOnChange(e)}} />
            
            <button onClick={handleSaveCart}>Finalizar Compra</button>
        </div>
    </div>
    );
};


export default Cart;
