// import {useState, useEffect, createContext, useContext} from 'react'

// const cartContext = createContext();

// export const {Provider} = cartContext;

// export const useCartContext = ()=> {
//     return useContext(cartContext)
// };

// const CartContextProvider = ({children})=>{
    
//     const cartContextValue={
//         titulo : 'Curso de React'
//     }
    
//     return <Provider value={contextValue}>{children}</Provider>
// };

// export default CartContextProvider


import { useState, useEffect, createContext, useContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
    const [qtyItems, setQtyItems] = useState(0)
    const cartContextValue = {
        titulo: 'Curso de React',
        qtyItems,
        setQtyItems
    };
    
    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
