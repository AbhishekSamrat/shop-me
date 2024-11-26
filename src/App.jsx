import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from './Redux/Product';

import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

import TopProduct from './Components/TopProducts/TopProduct';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/footer';

import Men from './Components/Page/Men';
import Women from './Components/Page/Women';
import Jewellery from './Components/Page/Jewellery';
import Electronics from './Components/Page/Electronics';
import AllProduct from './Components/AllProduct';
import Searchitem from './Components/Page/Searchitem';
import ProductDetail from './Components/Page/ProductDetail';
import ProductLayout from './Components/Page/ProductLayout';
import Login from './Components/Page/Login';
import Cartproduct from './Components/Page/Cartproduct';
import Wishlistproduct from './Components/Page/Wishlistproduct';
import Ordernow from './Components/Page/Ordernow';
import Contact from './Components/Contact/Contact';
import Testimonials from './Components/Testimonials/Testimonials';
import Register from './Components/Page/Register';




function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wish, setWish] = useState(() => {
    const savedWish = localStorage.getItem('wish');
    return savedWish ? JSON.parse(savedWish) : [];
  });

  

  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.product);



  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wish', JSON.stringify(wish));
  }, [wish]);

  useEffect(() => {

 AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <BrowserRouter>
      <Navbar data={data} cart={cart} setCart={setCart} wish={wish} setWish={setWish} />


        <Routes>
        <Route path='/login' element={<Login/>}/>
          <Route path="/" element={<Hero cart={cart} setCart={setCart} wish={wish} setWish={setWish} data={data}    />} >
          <Route path=":id" element={<ProductDetail data={data} cart={cart} setCart={setCart} />} />
          </Route>

          <Route path="/electronics/" element={<Electronics data={data} cart={cart} setCart={setCart} />}>
            <Route path=":id" element={<ProductDetail data={data} cart={cart} setCart={setCart} />} />
          </Route>
          <Route path="/men" element={<Men data={data} cart={cart} setCart={setCart} />}>
            <Route path=":id" element={<ProductDetail data={data} cart={cart} setCart={setCart} />} />
          </Route>
          <Route path="/women" element={<Women data={data} cart={cart} setCart={setCart} />}>
            <Route path=":id" element={<ProductDetail data={data} cart={cart} setCart={setCart} />} />
          </Route>
          <Route path="/jewellery" element={<Jewellery data={data} cart={cart} setCart={setCart} />}>
            <Route path=":id" element={<ProductDetail data={data} cart={cart} setCart={setCart} />} />
          </Route>
          <Route path="/search/:term" element={<Searchitem data={data} cart={cart} setCart={setCart} />} />
         <Route path='/contact' element={<Contact/>}/>
          <Route path="/cartproduct/" element={<Cartproduct cart={cart} setCart={setCart} />} />
          <Route path="/wishlist/" element={<Wishlistproduct wish={wish} setWish={setWish} />} />
          <Route path="/ordernow/" element={<Ordernow />} />
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>

    
      <Footer />
    </div>
  );
}

export default App;
