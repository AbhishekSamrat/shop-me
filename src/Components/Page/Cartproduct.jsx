import React, { useEffect, useState } from 'react'
import './Cartproduct.css'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const Cartproduct = ({cart,setCart}) => {
  const [total, setTotal] = useState(0);
 
  const remove=(abhi)=>{
    const filteritm = cart.filter((itm)=>itm.uid !==abhi)
    setCart(filteritm)
  } 
  

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((acc, item) => {
      return acc + (item.count || 1) * item.price; }, 0); 
      setTotal(parseFloat(totalPrice.toFixed(2)));
  };

  useEffect(() => {
    getTotalPrice();
  }, [cart]);

  
  const incrementCount = (uid) => {
    const prod = cart.map((product) =>
      product.uid === uid
        ? { ...product, count: (product.count || 0) + 1 } : product
    );
    setCart(prod);
  
      localStorage.setItem('cart', JSON.stringify(prod));
  };
  
    const decrementCount =  (uid)=>{
      const prod=cart.map((product)=>product.uid===uid ? {...product,count:product.count-1||1}:product);
        setCart(prod);
        localStorage.setItem('cart', JSON.stringify(prod));
      }
  
 
      useEffect(() => {
        window.scrollTo(0, 0);
   }, []);
 


  const clear=()=>{
    setCart([]);
    localStorage.removeItem('cart');
    alert("Your cart is empty")
    window.location.href = '/'
  }
  return (
    <div>
    <table class="table">
    <thead>
      <th>S.No</th>
      <th>Product Name</th>
      <th>Product Image</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Action</th>
    </thead>
    <tbody>
    {
      
      cart.map((item)=>(
        

          
          <tr>
          <td data-label="ID">
            {item.uid}
          </td>
          <td data-label="Product Name">
          {item.title.slice(0,16)}
        </td>
            <td data-label="Image">
            <img src= {item.image} style={{width:"50px",height:"50px"}} />
            </td>
            <td data-label="Price" id="price">${item.price * item.count}</td>
            <td data-label="Quantity"><div className="d-flex gap-2" style={{justifyContent:"center"}}>
             
        <IoMdAddCircleOutline  onClick={()=>incrementCount(item.uid)} style={{fontSize:"25px"}}/>
        <p>{item.count}</p>
        <GrSubtractCircle onClick={()=>decrementCount(item.uid)} style={{fontSize:"25px"}} />
      
      </div></td>
        
            <td data-label="Action">
           <center> <RiDeleteBin6Fill onClick={()=>remove(item.uid)}  style={{fontSize:"25px",color:"red",cursor:"pointer"}} /></center>

          </td>
          </tr>
      
         
   

      ))
    }
    </tbody>
    </table>
    <div style={{width:"350px",margin:"auto",background:"blue",color:"white",fontWeight:"bold",marginBottom:"10px"}}><h4 className='text-center p-2'>Total Price :  <span>${total}</span></h4></div>
    <center><button onClick={clear} className='btn btn-danger'>Clear Cart</button></center>
    </div>
  )
}

export default Cartproduct