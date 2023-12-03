import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';

import "./showdata.scss"


type Product = {
    id: number;
    title: string;
    date: string;
    image: string;
    description: string;
  }


const ShowData = () =>  
{
    const [products, setProducts] = useState<Product[]>([]);


useEffect(() => {
  axios.get('https://deafeningidealisticiteration.borntodev.repl.co/products')
    .then(response => {
      setProducts(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
}, []);


return (
  <div className="App">
    {products.map((product: Product) => (
      <div className='ListItem' key={product.id}>
        <h2>{product.title}</h2>
        <p>{product.date}</p>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
      </div>
    ))}
  </div>
);
}


export default ShowData