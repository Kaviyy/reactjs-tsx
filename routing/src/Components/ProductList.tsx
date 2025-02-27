import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {LifeLine} from 'react-loading-indicators'
import useFetch from './Custom-hook/Usefetch';
const ProductList = () => {
  // const [products, setProducts] = useState([]);
  // let [error,setError]=useState("");
  // let [isLoading,setIsloading]=useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:4000/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((error) =>{
  //       setError(error.message)
  //     } )
  //    .finally(()=>{
  //      setIsloading(false);
  //    })
  // }, []);
  let{products,error,isLoading} = useFetch("https://fakestoreapi.com/products")

  
if(isLoading){
  return(<div>
    <center>
    <LifeLine color="#32cd32" size="medium" text="" textColor="" />

    </center>
  </div>)
}
else{
  return (
    <div>
      <h1>Product List</h1>
      <section style={{ width:'95vw',display: 'flex', flexWrap: 'wrap', gap: '20px',padding:'20px',justifyContent:'center',alignItems:'stretch',margin:'auto' }}>
        {products.map((product, index) => (
          <Card key={index} style={{width:'18rem',flexGrow:1 }}>
            <center>
            <Card.Img variant="top" src={product.image || "https://via.placeholder.com/150"} style={{width:"9rem",height:"12rem"}}/>

            </center>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text style={{overflow:"scroll",height:"100px"}}>${product.description}</Card.Text>
              
            </Card.Body>
            <Card.Footer style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
            <Button variant="primary" style={{textAlign:"center"}}>Add to  cart</Button>
             
            </Card.Footer>
          </Card>
        ))}

      </section>
      {
        error && <p>{error}</p>
      }
    </div>
  );
};
}

export default ProductList;
