import React from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo1 from "../images/WhatsApp Image 2023-07-24 at 13.49.12.jpeg"
import Logo8 from "../images/WhatsApp Image 2024-01-03 at 19.00.55_e8264ce5.jpg"
import Logo2 from "../images/IMG-20230503-WA0114.jpg"
import img14 from "../images/WhatsApp Image 2024-06-30 at 11.35.15 AM (1).jpeg";
import Logo3 from "../images/IMG-20231006-WA0013.jpg"
import Logo4 from "../images/IMG_20230319_162251.jpg"
import Logo5 from "../images/WhatsApp Image 2023-10-25 at 15.20.18.jpeg"
import Logo6 from '../images/WhatsApp Image 2023-10-25 at 15.17.58.jpeg'
import Logo7 from '../images/WhatsApp Image 2023-10-25 at 15.34.36.jpeg'

const Hero=()=>{

 
    return(
      
      <div id="project"  className="  md:grid md:grid-cols-2 xl:grid-cols-3 md:grid-rows-1 mt-10  mb-14 " >

<div className="max-w-xs lg:mb-40 mx-auto mb-16  bg-[#DAF3F4] h-[520px]   shadow-xl border-yellow-200 rounded-xl  overflow-hidden">
      <img
        className=" mt-10  object-cover"
        src={img14}
        alt="Card"
      />
      
      
      <div className="px-6 py-4">
        <h2 className="text-xl text-center font-semibold ">Qurbani - 2024 - Sri Lanka </h2>
        <p className=" text-center text-gray-600">
        We shared our joys on Eid al-Adha.😊 Your small donation make  .....
        </p>
        <Link type="button" to="/qurbani" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center ml-20 mt-2">See More</Link> </div>
    </div> 
       <div className="max-w-xs lg:mb-40 mx-auto mb-16  bg-[#DAF3F4] h-[520px]   shadow-xl border-yellow-200 rounded-xl  overflow-hidden">
      <img
        className=" mt-10  object-cover"
        src={Logo8}
        alt="Card"
      />

      
      <div className="px-6 py-4">
        <h2 className="text-xl text-center font-semibold ">Water Is Life </h2>
        <p className=" text-center text-gray-600">
        The people in the Sri Lanka are facing the worst water crisis seen .....
        </p>
        <Link type="button" to="/WaterLife" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center ml-20 mt-2">See More</Link> </div>
    </div>  
    {/* <div className="max-w-xs lg:mb-40 mx-auto mb-16  bg-[#DAF3F4] h-[520px]   shadow-xl border-yellow-200 rounded-xl  overflow-hidden">
      <img
        className=" mt-10  object-cover"
        src={Logo1}
        alt="Card"
      />
      
      <div className="px-6 py-4">
        <h2 className="text-xl text-center font-semibold ">Clean Water</h2>
        <p className=" text-center text-gray-600">
        1 in 3 people do not have access to clean drinking water.....
        </p>
        <Link type="button" to="/CleanWater" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center ml-20 mt-2">See More</Link> </div>
    </div> */}

    <div className="max-w-xs mx-auto mb-16 lg:mb-0 bg-[#DAF3F4] h-[530px] shadow-xl border-yellow-200 rounded-xl  overflow-hidden">
    <img
        className=" mt-10  object-cover"
        src={Logo2}
        alt="Card"
      />
      <div className="px-6 py-4">
        <h2 className="text-xl text-center font-semibold text-gray-800">Zakat AL-Mal</h2>
        <p className="mt-2 text-center text-gray-600">
        Zakat is one of the Five Pillars of Islam. It is an Islamic duty for every Muslim to.....
        </p>
        <Link type="button" to="/Zakat" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center ml-20 mt-2">See More</Link>
      
      </div>
    </div>
    <div className="max-w-xs mx-auto mb-16 lg:mb-0 bg-[#DAF3F4] h-[520px] shadow-xl border-yellow-200 rounded-xl  overflow-hidden">
    <img
        className=" mt-10  object-cover"
        src={Logo5}
        alt="Card"
      />
      
      <div className="px-6 py-4">
        <h2 className="text-xl text-center font-semibold text-gray-800">Deep Water Well</h2>
        <p className="mt-2 text-center text-gray-600">
        Lack of access to safe drinking water disproportionately impacts poor .....
        </p>
        <Link type="button" to="/DeepWater"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center ml-20 mt-2">See More</Link>
      </div>
    </div>
    <div className="max-w-xs mx-auto mb-16 lg:mb-0 bg-[#DAF3F4] h-[520px] shadow-xl border-yellow-200 rounded-xl  overflow-hidden">
    <img
        className=" mt-10  object-cover"
        src={Logo4}
        alt="Card"
      />
      
      <div className="px-6 py-4">
        <h2 className="text-xl text-center font-semibold text-gray-800">Sadaqa</h2>
        <p className="mt-2 text-center text-gray-600">
        Sadaqah is a charity donation you can pay at any time of the year. Donate...
        </p>
        <Link type="button" to="/Sadaqa" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center ml-20 mt-2">See More</Link>
      </div>
    </div>

    <div className="max-w-xs mx-auto mb-16 lg:mb-0 bg-[#DAF3F4] h-[520px] shadow-xl border-yellow-200 rounded-xl  overflow-hidden">
    <img
        className=" mt-10  object-cover"
        src={Logo7}
        alt="Card"
      />
      
      <div className="px-6 py-4">
        <h2 className="text-xl text-center font-semibold text-gray-800">Water Station Srilanka</h2>
        <p className="mt-2 text-center text-gray-600">
        Your support to build the Water Well Station is going to provide .....
        </p>
        <Link type="button" to="/WaterStation"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center ml-20 mt-2">See More</Link>
      </div>
    </div>

    <div className="max-w-xs mx-auto mb-16 lg:mb-0 bg-[#DAF3F4] h-[520px] shadow-xl border-yellow-200 rounded-xl  overflow-hidden">
    <img
        className=" mt-10  object-cover"
        src={Logo6}
        alt="Card"
      />
      
      <div className="px-6 py-4">
        <h2 className="text-xl text-center font-semibold text-gray-800">Water Well</h2>
        <p className="mt-2 text-center text-gray-600">
        More than two-thirds of Sri Lankan's live in the rural areas whe .....
        </p>
        <Link type="button" to="/WaterWell" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center ml-20 mt-2">See More</Link>
      </div>
    </div>
       
      </div>
    );
  }


export default Hero;