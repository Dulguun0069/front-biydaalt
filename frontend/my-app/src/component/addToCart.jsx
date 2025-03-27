    import React from "react";

    function AddToCart({ product, addToCart }) {
    const handleAddToCart = () => {
        addToCart(product);
    };

    return <button onClick={handleAddToCart}>Add to Cart</button>;
    }

    export default AddToCart;