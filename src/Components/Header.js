
import React,{useState} from 'react'

import {FaBars,FaTimes} from 'react-icons/fa'
import Logo from '../images/hhmalogo (1).jpg'

import { Link } from "react-router-dom";


const Header = () => {
  const [nav,setNav] = useState(false);
  

  const handleHamClick = ()=>setNav(!nav)


 
  return (

<div className=' font-semibold fixed font-sans z-40  left-0 top-0 w-full ease-in-out duration-500 '>
  
  <div className=' w-full m-auto bg-white flex justify-evenly items-center p-4 text-black'>
    <div  className=' flex cursor-pointer'>
<a href='/#'> 
      <img className=' w-12' alt='Logo' src={Logo}/>  </a>
      <a href='/#'><h2 className='w-{50px} m-4' >HHMA-SRI LANKA
</h2></a>
      
        </div>
  <ul className='hidden md:flex md:text-xs  lg:text-lg  '>
    
    <li className=' p-4 pr-7 scroll-s hover:text-red-700 hover:scale-105'>
    <Link to='/#'> Home</Link>
    </li><Link to="/about">
    <li className=' p-4 pr-7 ho
    ver:text-red-700 hover:scale-105 '>
      About</li></Link>
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 '>  <a href='/#service' >Service</a></li><a href='/#project'>
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 '>Projects</li></a><a href='/#support'>
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 '>Donate</li></a>
  </ul>
  <div>
    
  </div>
  <div><Link to="/about">
   <button className=' hidden border-none  md:flex items-center justify-center mt-2 type="button" class="focus:outline-none text-white bg-[#808080] hover:bg-black   text-xl rounded-2xl font-bold  px-5 py-2 mr-2 mb-2   '>Contact Us</button></Link>
   </div>

  
  {/* mobile Icons */}

  <div className=' md:hidden z-50 block cursor-pointer '  onClick={handleHamClick}>
  
        {!nav?<FaBars size={20} className=''/>:<FaTimes size={20} className='mt-0 text-black bg-white'/>}
       
  </div>
  {/* Mobile menu */}
  <div  className={nav ? ' md:hidden text-black  absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black  text-center ease-in-out duration-500':'md:hidden  absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-500  text-center ease-in-out duration-500 '}>
  <ul>
    
    <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900  text-white '>
      <Link to="/">Home</Link>
    </li>
    <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900  text-white  '>
      <Link to="/about">About</Link>
    </li>
   <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900   text-white '><a href="#service">Service</a></li>
   <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900   text-white '><a href="#project
   ">Project</a></li>
   <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900   text-white '><a href="/#support">Donate</a></li>
   <Link to="/about"><button onClick={handleHamClick} className='type="button" class="focus:outline-none text-black bg-[#808080] hover:bg-white hover:text-black focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-white dark:focus:ring-green-800" '>Contact Us</button></Link>
   
  </ul>
  </div>
  </div>
</div>

 
  )
}

export default Header