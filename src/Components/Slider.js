import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion'
import { Carousel } from "react-responsive-carousel";
import img1 from "../images/WhatsApp Image 2024-01-03 at 19.00.55_e8264ce5.jpg";
import img8 from "../images/IMG-20220801-WA0029.jpg";
import img2 from "../images/WhatsApp Image 2024-01-03 at 19.00.57_8e693c53.jpg";
import img9 from "../images/WhatsApp Image 2023-07-24 at 12.48.26 (1).jpeg";
import img3 from "../images/WhatsApp Image 2024-01-03 at 19.00.57_eebcbef5.jpg";

import img10 from "../images/IMG_20230319_162251.jpg";
import img12 from "../images/IMG-20240105-WA0070.jpg";
import img11 from "../images/IMG-20220801-WA0014.jpg";
import img4 from "../images/IMG-20240105-WA0067.jpg";
import img5 from "../images/IMG-20231006-WA0013.jpg";
import img6 from "../images/WhatsApp Image 2023-10-25 at 15.20.16.jpeg";
import img7 from "../images/WhatsApp Image 2023-10-25 at 15.20.21.jpeg";
import img13 from "../images/WhatsApp Image 2024-06-30 at 11.35.12 AM (1).jpeg";
import img14 from "../images/WhatsApp Image 2024-06-30 at 11.35.15 AM (1).jpeg";

const AutoSlider = () => {
  const slides = [
    {
      image: img14,
      text: "Qurbani",
    
      buttonLink: "#", // Replace with your link
    },
    {
      image: img13,
      text: "Qurbani",
    
      buttonLink: "#", // Replace with your link
    },
    {
      image: img1,
      text: "WATER AID",
    
      buttonLink: "#", // Replace with your link
    },
    {
      image: img2,
      text: "WATER AID",
    
      buttonLink: "#", // Replace with your link
    },
  
    {
        image: img3,
        text: "Support The Needy All Year Round",
     
      },
      {
        image: img4,
        text: "Our Donation",
      
      },
      {
        image: img5,
        text: "Sri Lanka Economic Crisis Appeal",
    
      },
      {
        image: img6,
        text: "Emergency Appeals",

      },
      {
        image: img7,
        text: "Our Projects",
     
      },
      {
        image: img3,
        text: "DONATE GENEROUSLY THIS MUHARRAM",
     
      },
      {
        image: img8,
        text: "DONATE GENEROUSLY THIS MUHARRAM",
     
      },

      {
        image: img9,
        text: "DONATE GENEROUSLY THIS MUHARRAM",
     
      },

      {
        image: img10,
        text: "DONATE GENEROUSLY THIS MUHARRAM",
     
      },

      {
        image: img11,
        text: "DONATE GENEROUSLY THIS MUHARRAM",
     
      },
      {
        image: img12,
        text: "DONATE GENEROUSLY THIS MUHARRAM",
     
      },



    // Add more slides as needed
  ];

  return (
    <motion.div 
 className="w-full " id="home">
      <Carousel
        autoPlay={true}
        interval={1500}
        showStatus={false}
        infiniteLoop={true}
      
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full px-2 shadow-xl rounded-2xl xl:px-28 lg:h-[120vh] lg:mt-[100px] mt-20  xl:mt-[-150px]">
            <img src={slide.image} alt={`Slide ${index + 1}`}  className=""/>

            <div className="absolute top-56 md:top-[500px] left-0  right-40 opacity-60 bottom-0 flex flex-col justify-center items-center">
                
              <p className="text-2xl   md:text-2xl font-bold lg:text-3xl text-black bg-slate-200 p-2 md:p-3 lg:p-4 rounded">
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default AutoSlider;
