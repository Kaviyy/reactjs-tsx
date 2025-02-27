import React from 'react'
import useFetch from './Custom-hook/Usefetch'

const Home = () => {
  let {products}=useFetch("https://fakestoreapi.com/products")
  return (
    <div>
      <h1>Home-total products ={products.length}</h1>
      
    </div>
  )
}

export default Home