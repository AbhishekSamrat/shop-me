import React from 'react'
import './Cartproduct.css'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const Cartproduct = ({cart,setCart}) => {
  const remove=(id)=>{
    const filteritm = cart.filter((itm)=>itm.id !==id)
    setCart(filteritm)
  } 

  const totalprice = cart.reduce((prev,curr) => prev+curr.price,0)
  const clear=()=>{
    setCart("")
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
            {item.id}
          </td>
          <td data-label="Product Name">
          {item.title.slice(0,16)}
        </td>
            <td data-label="Image">
            <img src= {item.image} style={{width:"50px",height:"50px"}} />
            </td>
            <td data-label="Price" id="price">${item.price}</td>
            <td data-label="Quantity"><div className="d-flex gap-2">
        <input id="qty" value="0" />
        <IoMdAddCircleOutline  style={{fontSize:"25px"}}/>
        <GrSubtractCircle style={{fontSize:"25px"}} />
      
      </div></td>
        
            <td data-label="Action">
            <RiDeleteBin6Fill onClick={()=>remove(item.id)}  style={{fontSize:"25px",color:"red",cursor:"pointer"}} />

          </td>
          </tr>
      
         
   

      ))
    }
    </tbody>
    </table>
    <div style={{width:"350px",margin:"auto",background:"blue",color:"white",fontWeight:"bold",marginBottom:"10px"}}><h4 className='text-center p-2'>Total Price :  <span>${totalprice}</span></h4></div>
    <center><button onClick={clear} className='btn btn-danger'>Clear Cart</button></center>
    </div>
  )
}

export default Cartproduct