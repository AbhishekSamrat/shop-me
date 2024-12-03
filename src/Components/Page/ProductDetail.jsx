import React from 'react'
import { useParams } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import  './ProductDetail.css'



const ProductDetail = ({data,cart,setCart}) => {
   
    const {id} = useParams()
    console.log(id);
    const itemDetail = data.find((item) => item.id.toString() === id )
    if(!itemDetail){
        return <h1>Product not found!!</h1>
    }


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
      const updatedCart=([...cart , obj]);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      console.log('Cart:', updatedCart);
    }
  return (
        <div>
       
        <div className = "card-wrapper mt-70" >
        <div className = "card">
       
          <div className = "product-imgs">
            <div className = "img-display">
              <div className = "img-showcase">
                <img src = {itemDetail.image} alt = "shoe image"/>
                <img src = {itemDetail.image} alt = "shoe image"/>
                <img src = {itemDetail.image} alt = "shoe image"/>
                <img src = {itemDetail.image} alt = "shoe image"/>
              </div>
            </div>
            <div className = "img-select">
              <div className = "img-item">
                <a href = "#" data-id = "1">
                <img src = {itemDetail.image} alt = "shoe image"/>
                </a>
              </div>
              <div className = "img-item">
                <a href = "#" data-id = "2">
                <img src = {itemDetail.image} alt = "shoe image"/>
                </a>
              </div>
              <div className = "img-item">
                <a href = "#" data-id = "3">
                <img src = {itemDetail.image} alt = "shoe image"/>
                </a>
              </div>
              <div className = "img-item">
                <a href = "#" data-id = "4">
                <img src = {itemDetail.image} alt = "shoe image"/>
                </a>
              </div>
            </div>
          </div>
         
          <div className = "product-content">
            <h2 className = "product-title" style={{fontSize:"20px"}}>{itemDetail.title}</h2>
            <a href = "#" className = "product-link">visit nike store</a>
            <div className = "product-rating">
              <i className = "fas fa-star"></i>
              <i className = "fas fa-star"></i>
              <i className = "fas fa-star"></i>
              <i className = "fas fa-star"></i>
              <i className = "fas fa-star-half-alt"></i>
              <span>{itemDetail.rating.rate}</span>
            </div>
      
            <div className = "product-price">
              <p className = "last-price">Old Price: <span>$257.00</span></p>
              <p className = "new-price">New Price: <span>{itemDetail.price}</span></p>
            </div>
      
            <div className = "product-detail">
              <h2>about this item: </h2>
              <p>{itemDetail.description.slice(0,90)}</p>
           
              <ul>
                <li>Color: <span>Black</span></li>
                <li>Available: <span>in stock</span></li>
                <li>Category: <span>{itemDetail.category}</span></li>
                <li>Shipping Area: <span>All over the world</span></li>
                <li>Shipping Fee: <span>Free</span></li>
              </ul>
            </div>
      
            <div className = "purchase-info">
        
              <button type = "button" className = "btn" onClick={()=>addToCart( itemDetail.id,itemDetail.title,itemDetail.price,itemDetail.description,itemDetail.image,itemDetail.category)}>
                Add to Cart <i className = "fas fa-shopping-cart"></i>
              </button>
              <button type = "button" className = "btn">Compare</button>
            </div>
      
            <div className = "social-links">
              <p>Share At: </p>
              <a href = "#">
               <CiFacebook />
              </a>
              <a href = "#">
               <FaXTwitter/>
              </a>
              <a href = "#">
               <FaInstagram/>
              </a>
           
            </div>
          </div>
        </div>
      </div>

    </div>
        
      
  )
}

export default ProductDetail