import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import './Wishlist.css'

const Wishlistproduct = ({wish,setWish}) => {
  const remove=(abhi)=>{
    const filteritm = wish.filter((itm)=>itm.uid !==abhi)
    setWish(filteritm)
  } 
  return (
    <div>
    <table class="table">
    <thead>
    <th>S.No</th>
    <th>Product Name</th>
    <th>Product Image</th>
    <th>Price</th>

    <th>Action</th>
  </thead>
    <tbody>

{
wish.map((itm)=>(
<>
<tr>
<td data-label="ID">
  {itm.uid}
</td>
<td data-label="Product Name">
{itm.title.slice(0,16)}
</td>
  <td data-label="Image">
  <img src= {itm.image} style={{width:"50px",height:"50px"}} />
  </td>
  <td data-label="Price" id="price">${itm.price}</td>


  <td data-label="Action">
  <RiDeleteBin6Fill onClick={()=>remove(itm.uid)}  style={{fontSize:"25px",color:"red",cursor:"pointer"}} />

</td>
</tr>
</>

))

}

</tbody>
</table>
    </div>
  )
}

export default Wishlistproduct