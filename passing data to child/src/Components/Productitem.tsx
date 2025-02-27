import React from 'react'
import ProductDetails from './ProductDetails';

const Productitem = ({product}) => {
    //console.log(props);
    //let {product}=props
    //console.log(product);
    /* <section>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        
    </section>*/
 return (
    <>
    <h1>displaying product items</h1>
   
    <ProductDetails
       deepName={product.name}
       deepPrice ={product.price}
       deepDescription = {product.description}

    />
    </>
    
  )
}

export default Productitem
