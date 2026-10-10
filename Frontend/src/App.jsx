import React, { use, useEffect, useState } from 'react'
import ProductsList from './ProductsList';

function App() {

  // const [count,setCount]=useState(5);
  const [products,setProducts]=useState([]);
  // const [x,setx]=useState(12);

  // useEffect(()=>{
  //   console.log("anshika");
  // })
  // useEffect(()=>{
  //   console.log("sapna");
  // },[count,x])
  useEffect(()=>{
    // console.log("purnima");

   async function getData(){
    console.log("...loading");
    let responce=await fetch("https://full-stack-usestate-1.onrender.com/api/products");
    let data=await responce.json();
    // console.log(data);
    setProducts(data);
    console.log(products);
   }
  getData();
  },[])
  return (
    <div>
      {/* <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nihil.</h1> */}
      {/* <h1>my number is {count}</h1> */}
      {/* <button onClick={()=>{setCount(count+1)}}>click me</button>
      <button onClick={()=>{setx(x+1)}}>count me</button> */}

      <ProductsList products={products}/>

    </div>
  )
}

export default App