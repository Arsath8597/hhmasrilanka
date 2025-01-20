import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo8 from "../images/WhatsApp Image 2025-01-20 at 16.20.32_8146151f.jpg";
import Logo2 from "../images/IMG-20230503-WA0114.jpg";
import img14 from "../images/WhatsApp Image 2024-06-30 at 11.35.15 AM (1).jpeg";
import img15 from "../images/WhatsApp Image 2024-07-12 at 9.45.10 AM.jpeg";
import Logo4 from "../images/IMG_20230319_162251.jpg";
import Logo5 from "../images/WhatsApp Image 2023-10-25 at 15.20.18.jpeg";
import Logo6 from "../images/WhatsApp Image 2025-01-16 at 15.25.25_791637e9 (2).jpg";
import Logo7 from "../images/WhatsApp Image 2025-01-16 at 15.34.46_13442f7b (2).jpg";
import Logo9 from "../images/WhatsApp Image 2025-01-16 at 15.38.00_ab80191b (2).jpg";
import Logo10 from "../images/WhatsApp Image 2025-01-16 at 15.42.24_17cf1d89 (2).jpg";
import Logo11 from "../images/WhatsApp Image 2025-01-16 at 15.46.59_7cc5def7 (2).jpg";
import Logo12 from "../images/WhatsApp Image 2025-01-19 at 10.31.58_c4cd0e71 (2).jpg";
import Logo13 from "../images/WhatsApp Image 2025-01-16 at 16.07.18_b9de7eb6 (2).jpg";
import Logo15 from "../images/WhatsApp Image 2025-01-16 at 16.03.17_1b59582a (2).jpg";
import Logo16 from "../images/WhatsApp Image 2025-01-16 at 16.06.41_c9e7dea8 (2).jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8 mb-14">
      {[
        {
          img: Logo6,
          title: "RAMADAN FOOD PROGRAM 2024/1445H",
          description:
            "✨Join HHMA Sri Lanka this Ramadan in supporting families in need with our Food Packs......",
          link: "/ramadan",
        },
        {
          img: Logo7,
          title: "WATER WELL FOR THE MASJID",
          description:
            "Alhamdulilah ❤ A community water well was constructed and provided to the  .....",
          link: "/masjid",
        },
        {
          img: Logo13,
          title: " HAND PUMP WATER WELL ",
          description:
            "Alhamdulilah, a new hand pump water well has been successfully .....",
          link: "/handpumb1",
        },
        {
          img: Logo10,
          title: " Espoir et Avenir with HHMA Sri Lanka 💧Community Water Well",
          description:
            "💚One of many Water Project Completed! Thank you for your valuable.....",
          link: "/espoir",
        },
        {
          img: Logo8,
          title: "💧SRI LANKA DEEP WATER WELL💧",
          description:
            "Thanks 🎉to the dedication and hard work of our charity Founder .....",
          link: "/waterwellforcommunity",
        },
        {
          img: Logo11,
          title: " COMMUNITY WATER WELL ",
          description:
            "Help us build Community Water Well in the Trincomalee region of Sri Lanka.  .....",
          link: "/community",
        },
        {
          img: Logo12,
          title: "ORPHANS CARE RELIEF PROGRAM",
          description:
            "💜 Most of the children we help don't have their parents, helping  .....",
          link: "/orphans",
        },
        {
          img: Logo15,
          title: "Water Well For 1 Family",
          description:
            "💧The Prophet, peace be upon him, said: The best charity.....",
          link: "/family",
        },
        {
          img: Logo16,
          title: "QURAN GIVING ",
          description:
            "The Quran you donated was delivered to the children in the  .....",
          link: "/quran",
        },
        {
          img: img15,
          title: "Hand Pump for Family",
          description:
            "Increasing access to clean water remains a pressing challenge globally .....",
          link: "/handpump1",
        },
        {
          img: img14,
          title: "Qurbani - 2024 - Sri Lanka",
          description:
            "We shared our joys on Eid al-Adha.😊 Your small donation make .....",
          link: "/qurbani",
        },
        {
          img: Logo5,
          title: "Deep Water Well",
          description:
            "Lack of access to safe drinking water disproportionately impacts poor .....",
          link: "/DeepWater",
        },
        {
          img: Logo4,
          title: "Sadaqa",
          description:
            "Sadaqah is a charity donation you can pay at any time of the year. Donate...",
          link: "/Sadaqa",
        },
      ].map(({ img, title, description, link }, index) => (
        <div
          key={index}
          className="max-w-xs mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <img className="h-52 w-full object-cover" src={img} alt={title} />
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold text-center text-blue-800">
              {title}
            </h2>
            <p className="text-center text-gray-600 mt-2">{description}</p>
            <a
              href={link}
              className="block w-fit mx-auto mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              See More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
