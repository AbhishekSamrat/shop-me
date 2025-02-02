import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";

import './Wishlist.css'

const Wishlistproduct = ({wish,setWish}) => {
    // Function to remove an item from the wishlist based on its unique ID (`uid`)
  const remove=(abhi)=>{
     // Filters out the item with the matching `uid` from the `wish` array
    const filteritm = wish.filter((itm)=>itm.uid !==abhi)
      // Updates the `setWish` state with the filtered wishlist (removes the item)
    setWish(filteritm)
  } 
       
  return (

  /* Wishlist  section start  */
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
      /* Wishlist  section end  */
  )
}

export default Wishlistproduct