import React, { useState } from "react";

const ProductDetail = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div className="product-detail">
            <img src={product.imgSrc} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <input
                type="number"
                value={quantity}
                min="1"
                max="10"
                onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button onClick={handleAddToCart} className="btn btn-primary">Agregar al carrito</button>
        </div>
    );
};

export default ProductDetail;
