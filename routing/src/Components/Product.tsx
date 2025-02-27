import React, { useEffect,useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const Product = () => {
  /*let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  //useEffect(()=>{
   // console.log("This effect will run after the component render,it will execute after every re render,first time render");
 // })
  //useEffect(()=>{
  //  console.log("This effect will run after the component render,it will execute only after initial re render,only when state update");
  //},[])
  useEffect(()=>{
     console.log("This effect will run only dependency change");
  },[count1])

  console.log("initial render")
  return (
    <div>
      <h2>Product-{count}-{count1}</h2>
         <Button variant="primary" onClick={()=>setCount(count+1)}>Increase</Button>
         <Button variant="primary" onClick={()=>setCount1(count+1)}>Increase1</Button>
        <Link to="list">List</Link>
        <Link to="details">Details</Link>
        
      <Outlet />
    </div>
  );
};

export default Product;*/
return (
  <div>
    <Outlet />
  </div>
);
};

export default Product;
