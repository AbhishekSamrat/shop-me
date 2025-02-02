
import React, { useEffect, useState } from 'react';
import { FaDollarSign } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';

const Electronics = ({data,cart,setCart}) => {
 const [electronics,setElectronics]=useState([]);
 
 useEffect(()=>{
  // Filters the `data` array to include only items in the 'electronics' category
  const filteredData=data.filter(item=>item.category==='electronics'  );
  setElectronics(filteredData);

 },[data]) // The effect re-runs whenever the `data` prop changes
 console.log(electronics);
 const  addToCart = (id,title,price,description,image,category) =>{
  const obj = {
    id: id,
    count :1,
    uid:Date.now(),
    title :title,
    price :price,
    description:description,
    image :image,
    category : category
  }
    // Adds the new product to the existing cart
  const updatedCart=([...cart , obj]);
  setCart(updatedCart);
  // Saves the updated cart to localStorage for persistence
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  console.log('Cart:', updatedCart);
}
  return (
    <>
    <Outlet/>
    <div className='mt-14 mb-12'>
    <div className='container mx-auto'>
      {/* Header Section */}
      <div className='text-center mb-10 max-w-[600px] mx-auto'>
        <p data-aos='fade-up'>Top selling products for you</p>
        <h1 data-aos='fade-up' className='text-3xl font-bold'>
        Electronics Products
        </h1>
        <p data-aos='fade-up' className='text-xs text-gray-400'>
          Explore our wide range of products with the best offers available.
        </p>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center'>
        {electronics.map((item) => (
          <div
           data-aos='fade-up'
           data-aos-delay=" "
            key={item.id}
            className='bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300'
          >
          <a href={`/electronics/${item.id}`}>
          <img
          src={item.image}
          alt={item.title}
          className='h-[220px] w-[150px] object-cover rounded-md'
        />
          </a>
           
           
         <div>
         <h3 className='font-semibold'>{item.title.slice(0,20)}</h3>
        <div className='flex items-center gap-1'>
        <FaDollarSign  className='text-yellow-400' />
       <span>  {item.price}</span>
        </div>
         </div>
         <center><button onClick={()=>addToCart( item.id,item.title,item.price,item.description,item.image,item.category)} className='bg-primary  hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' >Add To Cart</button></center>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>

      
      </div>
    </div>
  
  </div>
  </>
);
}
export default Electronics