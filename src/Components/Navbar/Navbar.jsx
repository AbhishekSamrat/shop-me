import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'

import { FiShoppingBag } from 'react-icons/fi'
import { FaHeart } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import {Link, NavLink,BrowserRouter as Router, useNavigate} from 'react-router-dom'
import { SlMenu } from "react-icons/sl";
import './Navbar.css'

const Navbar = ({cart,wish,setWish}) => {
    const navigate = useNavigate()
 const [searchTerm, setSearchterm] = useState("")

 const handleSubmit = (e)=>{
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchterm("")
 }

 const [menuOpen, setMenuOpen] = useState(false);

 const toggleMenu =  () =>{
    setMenuOpen(!menuOpen)
 }

 

    return (
      
      <div className='shadow-md bg-white dark:bg-text-white duration-200 relative z-40' style={{position:"sticky",top:"0px"}}>
      <div className='bg-primary/40 py-2'>
          <div className='container flex justify-between items-center'>
              <div>
                  <a href='#' className='font-bold text-xl items-center flex gap-1'>
                      <FiShoppingBag size={30} />
                      My Kart
                  </a>
              </div>
              <div className='flex justify-between items-center' id='naav' style={{flexWrap:"wrap"}}>
                  <form onSubmit={handleSubmit} className='relative group hidden sm:block' id='form'>
                      <input type='text' placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800' 
                      value={searchTerm}
                      onChange={(e)=> setSearchterm(e.target.value)}
                      />
                      <IoMdSearch className='text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                  </form>
             
                  <Link to= '/cartproduct' type="button" class="btn btn-primary position-relative">
  <FaCartShopping />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {cart.length}
   
  </span>
</Link>

<Link  to= '/wishlist' type="button" class="btn btn-primary position-relative">
  <FaHeart />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {wish.length}
   
  </span>
</Link>
<NavLink to= "/login"><FaUserCircle style={{fontSize : "35px",marginLeft:"40px", color:"blue"}}  /></NavLink>
                  
              </div>
          </div>
      </div>

   <nav className='navbar' style={{justifyContent:"space-between",display:"flex",alignItems:"center",marginLeft:"10px",marginRight:"10px",paddingTop:"5px",paddingBottom:"5px"}}>
   <div>Abhishek Samrat</div>
     <SlMenu className='menu' onClick={toggleMenu} />
   <ul className={ menuOpen ? 'navbar-linkk active':'navbar-linkk'}  >
   <li>
   <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
   
   </li>
   <li>
   <NavLink to='/electronics' onClick={toggleMenu}>Electronics</NavLink>
   
   </li>
   <li>
   <NavLink to='/men' onClick={toggleMenu}>Men's Clothing</NavLink>
   </li>
   <li>
   <NavLink to='/women' onClick={toggleMenu}>Women's Clothing</NavLink>
   </li>
   <li>
   <NavLink to='/jewellery' onClick={toggleMenu}>Jewellery</NavLink>
   </li>
   <li>
   <a href='#contact' onClick={toggleMenu}>Contact Us</a>
   </li>
   </ul>
</nav>

  </div>
   
    )
}

export default Navbar