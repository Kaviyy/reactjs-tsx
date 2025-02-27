import React, { useState } from 'react';
import Productitem from './Productitem'; // Import the component

const Shop = () => {
    let [product, setProduct] = useState({
        name: "iphone7",
        price: 10000,
        description: "8GB RAM with 128GB Storage"
    });

    return (
        <div>
            <h1>Welcome to our shop</h1>
            <Productitem product={product}/>
        </div>
    );
}

export default Shop;
