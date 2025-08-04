import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../images/WhatsApp Image 2025-01-16 at 16.03.20_46b6862d (2).jpg";
import img2 from "../images/WhatsApp Image 2025-01-16 at 16.03.21_ad3d9412 (2).jpg";
import img3 from "../images/WhatsApp Image 2025-01-16 at 16.03.09_9b23ebe1 (2).jpg";
import img8 from "../images/WhatsApp Image 2025-01-16 at 16.07.21_8b71a315 (2).jpg";
import img9 from "../images/WhatsApp Image 2025-01-16 at 16.03.16_68585a2a (2).jpg";
import img10 from "../images/WhatsApp Image 2025-01-16 at 15.34.46_2816e352 (2).jpg";
import img11 from "../images/WhatsApp Image 2025-01-16 at 15.25.25_791637e9 (2).jpg";
import img12 from "../images/WhatsApp Image 2025-01-16 at 15.34.49_4ffe9dea (2).jpg";
import Logo10 from "../images/WhatsApp Image 2025-01-16 at 15.42.24_3426d153 (2).jpg";
import Logo11 from "../images/WhatsApp Image 2025-01-16 at 15.47.01_409a2396 (2).jpg";
import Logo13 from "../images/WhatsApp Image 2025-01-16 at 15.38.00_ab80191b (2).jpg";
import LastImage from "../images/LastImage.png";

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
    <section className="bg-white py-10">
      <motion.div
        className="max-w-7xl mx-auto px-4"
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
          emulateTouch
          swipeable
          stopOnHover
        >
          {slides.map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Carousel Slide ${index + 1}`}
                className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </Carousel>
      </motion.div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Water Well for Sri Lanka 💧
        </h2>
        <img
          src={LastImage}
          alt="Water Well Project"
          className="mx-auto rounded-lg shadow-md mb-6"
        />
        <p className="text-gray-700 leading-relaxed text-lg">
          Every time we say “yes” to a community waiting for safe water, it’s
          because someone else said “yes” first. Our <strong>Sustainers</strong>{" "}
          are the heroes behind every water project — a committed group of
          monthly donors making long-term change possible. Your steady support
          helps us plan ahead, reach more villages, and keep clean water flowing
          where it’s needed most.
          <br />
          <br />
          Be part of a movement that changes lives one month, one village, one
          future at a time. When you join, you'll receive updates,
          behind-the-scenes stories, and meaningful gifts. But most importantly,
          you'll be part of something extraordinary.
        </p>

        <div className="mt-6">
          <a
            href="https://www.helloasso.com/associations/espoir-et-avenir/formulaires/18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Become a Sustainer
          </a>
        </div>

        <div className="mt-6 text-gray-600">
          📧{" "}
          <a href="mailto:hhmasrilanka@gmail.com" className="underline">
            hhmasrilanka@gmail.com
          </a>{" "}
          <br />☎{" "}
          <a href="tel:+94767313385" className="underline">
            +94 76 731 3385
          </a>
        </div>
      </div>
    </section>
  );
};

export default AutoSlider;
