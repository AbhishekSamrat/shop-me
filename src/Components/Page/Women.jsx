
import React, { useEffect, useState } from 'react';
import { FaDollarSign } from "react-icons/fa";
import { Outlet } from 'react-router-dom';

const Women = ({data,cart,setCart}) => {
 const [women,setWomen]=useState([]);
 
 useEffect(()=>{
  const filteredData=data.filter(item=>item.category==="women's clothing");
  setWomen(filteredData);

 },[data])
 console.log(women);
 const  addToCart = (id,title,price,description,image,category) =>{
  const obj = {
    id,title,price,description,image,category
  }
  setCart([...cart , obj])
  console.log( cart)
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
        Women's clothing
        </h1>
        <p data-aos='fade-up' className='text-xs text-gray-400'>
          Explore our wide range of products with the best offers available.
        </p>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center'>
        {women.map((item) => (
          <div
           data-aos='fade-up'
           data-aos-delay=" "
            key={item.id}
            className='bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300'
          >
          <a href={`/women/${item.id}`}>

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
      <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>View All</button>
      </div>
    </div>
  </div>
  </>
);
}
export default Women