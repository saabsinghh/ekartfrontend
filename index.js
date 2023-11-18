//import axios from "axios";
//import { useState } from "react";
//<link rel="stylesheet" href="./App.css"></link>
import  '../App.css'
//import Categories from './src/components/Categories';
import Categories from '../components/Categories';
//import Footer from '../components/Footer';
import Footer from '../components/Footer';
//import Navbar from './src/components/Navbar';
//import Slider from './components/slider';
import Navbar from '../components/Navbar';
 
const Home  = () =>  {
  return (
    
    <><div className='navbar'>
    <Navbar/>
    </div>
    <img src='https://images.unsplash.com/photo-1603798125914-7b5d27789248?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='clothes' className='img' />
    <div className='flex1'>
      <img src='https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNsb3RoZXMlMjBob3Jpem9udGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='clothes' className='img2'/>
      <div style={{display:'flex', flexDirection:'column'}}>
      <div className='estore'>E-Store</div>
      <div className='welcome'><p>HI,Welcome to E-Store .Here you will find a huge range of products also of many aspects like shirts,jeans,handbags.Also we have very reasonable prices cant will not disappoint you .So,you are waiting for What?Just start the shopping!!!!</p></div>
      </div>
    </div>
    <Categories/>
    <Footer/>

         </>  
 )
};
export default Home;
  


