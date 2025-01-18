import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import img1 from "../images/WhatsApp Image 2025-01-16 at 16.03.20_46b6862d (2).jpg";
import img8 from "../images/WhatsApp Image 2025-01-16 at 16.07.21_8b71a315 (2).jpg";
import img2 from "../images/WhatsApp Image 2025-01-16 at 16.03.21_ad3d9412 (2).jpg";
import img9 from "../images/WhatsApp Image 2025-01-16 at 16.03.16_68585a2a (2).jpg";
import img3 from "../images/WhatsApp Image 2025-01-16 at 16.03.09_9b23ebe1 (2).jpg";
import img10 from "../images/WhatsApp Image 2025-01-16 at 15.34.46_2816e352 (2).jpg";
import img12 from "../images/WhatsApp Image 2025-01-16 at 15.34.49_4ffe9dea (2).jpg";
import img11 from "../images/WhatsApp Image 2025-01-16 at 15.25.25_791637e9 (2).jpg";
import img4 from "../images/IMG-20240105-WA0067.jpg";
import img5 from "../images/IMG-20231006-WA0013.jpg";

import Logo10 from "../images/WhatsApp Image 2025-01-16 at 15.42.24_3426d153 (2).jpg";
import Logo11 from "../images/WhatsApp Image 2025-01-16 at 15.47.01_409a2396 (2).jpg";
import Logo12 from "../images/WhatsApp Image 2025-01-16 at 15.52.56_90a873d8 (2).jpg";
import Logo13 from "../images/WhatsApp Image 2025-01-16 at 15.38.00_ab80191b (2).jpg";

const AutoSlider = () => {
  const slides = [
    img1,
    img2,
    img3,
    Logo10,
    Logo11,
    Logo13,

    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        dynamicHeight={false}
        emulateTouch
        swipeable
        stopOnHover
      >
        {slides.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-[70vh] md:h-[80vh] lg:h-[90vh] rounded-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default AutoSlider;
