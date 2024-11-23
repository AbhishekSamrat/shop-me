
import React from 'react';
import { FaDollarSign } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import './Allproduct.css'



const AllProduct = ({data,cart,setCart,wish,setWish}) => {

  
const  addToCart = (id,title,price,description,image,category) =>{
  const obj = {
    id,title,price,description,image,category
  }
  setCart([...cart , obj])
  console.log( cart)
}

const addTowishlist = (id,title,price,description,image,category)=>{
  const obj = {
    id,title,price,description,image,category
  }
        setWish([...wish,obj])
}

    return (
      <div className='mt-14 mb-12'>
        <div className='container mx-auto'>
          {/* Header Section */}
          <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos='fade-up'>Top selling products for you</p>
            <h1 data-aos='fade-up' className='text-3xl font-bold'>
              Products
            </h1>
            <p data-aos='fade-up' className='text-xs text-gray-400'>
              Explore our wide range of products with the best offers available.
            </p>
          </div>
  
          {/* Products Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 place-items-center'>
            {data.map((item) => (
              <div
              style={{position:"relative"}}
               data-aos='fade-up'
               data-aos-delay=" "
                key={item.id}
                className='bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300'
                id='box'
              >
              <FaRegHeart onClick={()=>addTowishlist(item.id,item.title,item.price,item.description,item.image,item.category)} style={{position:"absolute",top:"2%",right:"10%",cursor:"pointer"}} id='heart'  />
               <a href={item.id}>
               <img
               src={item.image}
               alt={item.title}
               className='h-[320px] w-[280px] rounded-md'
             />
               </a>
             <div>
             <h3 className='font-semibold'>{item.title.slice(0,16)}</h3>
            <div className='flex items-center gap-1'>
            <FaDollarSign  className='text-yellow-400' />
           <span>  {item.price}</span>
            </div>
            <center><button onClick={()=>addToCart( item.id,item.title,item.price,item.description,item.image,item.category)} className='bg-primary  hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' >Add To Cart</button></center>
             </div>
         
              </div>
            ))}
            
          </div>
   
        </div>
      </div>
    );
  }
  
export default AllProduct