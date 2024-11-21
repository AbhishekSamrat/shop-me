import React from 'react'
import { useParams } from 'react-router-dom';
import  './ProductDetail.css'

const ProductDetail = ({data}) => {
   

    const {id} = useParams()
    console.log(id);
    const itemDetail = data.find((item) => item.id.toString() === id )
    if(!itemDetail){
        return <h1>Product not found!!</h1>
    }
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;
    
    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });
    
    function slideImage(){
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    
        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }
    
    window.addEventListener('resize', slideImage);
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
              <input type = "number" min = "0" value = "1" />
              <button type = "button" className = "btn">
                Add to Cart <i className = "fas fa-shopping-cart"></i>
              </button>
              <button type = "button" className = "btn">Compare</button>
            </div>
      
            <div className = "social-links">
              <p>Share At: </p>
              <a href = "#">
                <i className = "fab fa-facebook-f"></i>
              </a>
              <a href = "#">
                <i className = "fab fa-twitter"></i>
              </a>
              <a href = "#">
                <i className = "fab fa-instagram"></i>
              </a>
              <a href = "#">
                <i className = "fab fa-whatsapp"></i>
              </a>
              <a href = "#">
                <i className = "fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
        
      
  )
}

export default ProductDetail