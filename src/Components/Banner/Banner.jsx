import React from 'react'
import hero from '../../../public/Image/1.jpg'


const Banner = () => {
  return (
      /* Banner section start */
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
    <div className='container'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
    <div data-aos="Zoom-in">
    <img className='max-w-[400px] h-[350px] w-full mx-auto object-cover' src={hero} alt=''  />
    </div>
    <div className='flex flex-col justify-center gap-6 sm:pt-0' >
    <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Winter sale upto 50% off</h1>
    <p data-aos = 'fade-up' className='text-sm text-gray-500 tracking-wide leading-5'>lorem3fa-stack-2x lorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2x lorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2x lorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2xlorem3fa-stack-2x stack-2xlorem3fa-stack-2x</p>
   
    </div>
    </div>
    </div>
    </div>
      /* Banner section end */
  )
}

export default Banner