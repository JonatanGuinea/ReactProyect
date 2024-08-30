import React, { useEffect, useState, createContext, useContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
    const [qtyItems, setQtyItems] = useState(0);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart'))
        const localTotal = JSON.parse(localStorage.getItem('total'))
        const localQty = JSON.parse(localStorage.getItem('qty'))
        if (localCart && localTotal && localQty){
        setCart(localCart)
        setTotal(localTotal)
        setQtyItems(localQty)
        }
    }, [])
    

    const isInCart = (id) => {
        return cart.find((elem) => elem.id === id);
    };

    const addToCart = (item, qty) => {
        const newTotal = total + item.price * qty;
        const newQtyItems = qtyItems + qty;
   
        let newCart = [];
   
        if (isInCart(item.id)) {
            newCart = cart.map((elem) => {
                if (elem.id === item.id) {
                    return { ...elem, qty: elem.qty + qty };
                } else {
                    return elem;
                }
            });
        } else {
            newCart = [...cart, { ...item, qty }];
        }
   
        setCart(newCart);
        setTotal(newTotal);
        setQtyItems(newQtyItems);
   
        localStorage.setItem('cart', JSON.stringify(newCart));
        localStorage.setItem('total', JSON.stringify(newTotal));
        localStorage.setItem('qty', JSON.stringify(newQtyItems));
    };
   

    const clearCart = ()=>{
        setCart([])
        setTotal(0)
        setQtyItems(0)
        localStorage.removeItem('cart')
        localStorage.removeItem('total')
    }

    const removeItem = (id, price, qty) => {
        const newTotal = total - price * qty;
        const newQtyItems = qtyItems - qty;
        const newCart = cart.filter((elem) => elem.id !== id);
   
        setCart(newCart);
        setTotal(newTotal);
        setQtyItems(newQtyItems);
   
        localStorage.setItem('cart', JSON.stringify(newCart));
        localStorage.setItem('total', JSON.stringify(newTotal));
        localStorage.setItem('qty', JSON.stringify(newQtyItems));
    };
   

    const cartContextValue = {
        qtyItems,
        setQtyItems,
        addToCart,
        cart,
        total,
        clearCart,
        removeItem

    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

