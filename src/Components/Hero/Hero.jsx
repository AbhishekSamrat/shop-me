import React from 'react'
import Image1 from '../../../public/Image/1.jpg'
import Image2 from '../../../public/Image/2.jpg'
import Image3 from '../../../public/Image/3.jpg'
import Slider from 'react-slick'

const ImageList =[
    {
        id : 1,
        img : Image1,
        title : "Upto 50% off on all Men's Wear",
        description : "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services."
    },
    {
        id : 2,
        img : Image2,
        title : "Upto 70% off on all Products Sale",
        description : "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services."
    },
    {
        id : 3,
        img : Image3,
        title : "Upto 30% off on all Women's Wear",
        description : "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services."
    }
]
const Hero = ({handleOrderpopup}) => {
    var settings = {
        dots : false,
        arrows : false,
        infinite : true,
        speed :800,
        slidesToScroll : 1,
        autoplay:true,
        autoplaySpeed : 4000,
        cseEase : "ease-in-out",
        pauseonHover : false,
        pauseonFocus : true,
    };
  return (
    <div className=' relative overflow-hidden h-min-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300'>
    <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
    <div className='container pb-8 sm:pb-0'>
    <Slider {...settings}>
    {
        ImageList.map((data)=>{
            return(
                <div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                <h1 data-aos="zoom-out" data-aos-duration= "500" data-aos-once = "true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='text-sm'>{data.description}</p>
                <div data-aos = "fade-up" data-aos-duration = "500" data-aos-delay="300">
                <a href='#contact'  onClick={()=>{handleOrderpopup}} className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</a>
                </div>
                </div>
                <div className='order-1 sm:-order-2'>
                <div className='relative  z-10' data-aos="zoom-in" data-aos-once="true">
                <img src={data.img} className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'></img>
                </div>
                </div>
                </div>
                </div>
            )
        })
    }
    </Slider>
    
    </div>
    </div>
  )
}

export default Hero