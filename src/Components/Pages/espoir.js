import React from "react";
import img1 from "../../images/WhatsApp Image 2025-01-16 at 15.42.23_7d7e9faa (2).jpg";
import img2 from "../../images/WhatsApp Image 2025-01-16 at 15.42.24_17cf1d89 (2).jpg";
import img3 from "../../images/WhatsApp Image 2025-01-16 at 15.42.24_3426d153 (2).jpg";
import img4 from "../../images/WhatsApp Image 2025-01-16 at 15.42.24_e57de0a5 (2).jpg";
import img5 from "../../images/WhatsApp Image 2025-01-16 at 15.42.25_74fa6b13 (2).jpg";
import img6 from "../../images/WhatsApp Image 2025-01-16 at 15.42.25_21360f8c (2).jpg";
import img7 from "../../images/WhatsApp Image 2025-01-16 at 15.42.26_55cea660 (2).jpg";
import img8 from "../../images/WhatsApp Image 2025-01-16 at 15.42.26_e738ee73 (2).jpg";

export const CleanWater = () => {
  return (
    <div className=" rounded-lg xl:px-28 mt-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <h3 className="mb-2 text-center text-2xl font-medium leading-tight text-black">
        Espoir et Avenir with HHMA Sri Lanka 💧Community Water Well
      </h3>
      <p className="mb-4 ">
        💚One of many Water Project Completed! Thank you for your valuable
        support Espoir et Avenir Association team 💓
      </p>
      <a href="#!">
        <img className="rounded-2xl my-2 px-2" src={img1} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img2} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img3} alt="" />
        <p className="m-4 ">
          MashaAllah, we’re thrilled to announce the successful completion of
          yet another water project, providing clean and safe drinking water to
          those in need.
        </p>
        <img className="rounded-2xl my-2 px-2" src={img4} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img5} alt="" />
        <p className="m-4 ">
          As Espoir et Avenir Association, you have provided your generous
          support to those in need in Sri Lanka. We extend our heartfelt
          gratitude to all the donors who contributed. May Allah accept your
          good deeds. 🤲
        </p>
        <img className="rounded-2xl my-2 px-2" src={img6} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img7} alt="" />
        <p className="m-8">
          Donate Now for a water well just $590 | €555. Be a part of the change!
          Donate today and sponsor a life-saving project like this. Together we
          can make a difference.
        </p>{" "}
        <img className="rounded-2xl my-2 px-2" src={img8} alt="" />
      </a>

      <div className="p-6">
        <p className="mt-8">
          www.hhmasrilanka.org <br />
          📩 hhmasrilanka@gmail.com <br />
          📞 +94 76 731 3385 Telephone/WhatsAp
        </p>
      </div>
    </div>
  );
};
export default CleanWater;
