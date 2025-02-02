import React from 'react'
import shirt1 from '../../../public/Image/shirt/shirt/shirt.png'
import shirt2 from '../../../public/Image/shirt/shirt/shirt2.png'
import shirt3 from '../../../public/Image/shirt/shirt/shirt3.png'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';



const ProductsData = [
  {
    id: 1,
    img: shirt1,
    title: "Casual wear",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 2,
    img: shirt2,
    title: "Printed shirt",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 3,
    img: shirt3,
    title: "women wear",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
]

const TopProduct = ({ handleOrderpopup }) => {
  const user = "abhi";

  return (


  /* Best Products section start  */
<div className='container'>
<div className='text-left mb-24'>
  <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products For You</p>
  <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
  <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, explicabo. Provident blanditiis aut beatae iste repudiandae omnis incidunt.</p>
</div>
<div>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
    {
      ProductsData.map((data) => (
        <div data-aos="zoom-in" className='rounded-2xl text-center bg-white relative shadow-xl duration-300 group max-w-[300px]'>
          <div className='h-[100px]'>
            <img src={data.img} className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'></img>
          </div>
             {/*Best Products ratings */}
          <div className='p-4 text-center'>
            <div className='w-full flex items-center justify-center gap-1'>
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
            </div>

     
                   {/*Best Products title */}
            <h1 className='text-xl font-bold'>{data.title}</h1>

              {/*Best Products description */}
            <p className='text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2' style={{ marginBottom: "5px" }}>{data.description}</p>
          
            <a href={!user ? '/login' : '/ordernow'} className='bg-primary  hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>Order Now</a>
          </div>

        </div>

      ))
    }
  </div>
</div>

</div>
  /* Best Products section end  */
  
  )
}

export default TopProduct