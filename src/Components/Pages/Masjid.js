import React from "react";
import img1 from "../../images/WhatsApp Image 2025-01-16 at 15.34.46_2816e352 (2).jpg";
import img2 from "../../images/WhatsApp Image 2025-01-16 at 15.34.46_13442f7b (2).jpg";
import img3 from "../../images/WhatsApp Image 2025-01-16 at 15.34.47_551ce9d6 (2).jpg";
import img4 from "../../images/WhatsApp Image 2025-01-16 at 15.34.47_e8ad80dd (2).jpg";
import img5 from "../../images/WhatsApp Image 2025-01-16 at 15.34.48_d7f79fde (2).jpg";
import img6 from "../../images/WhatsApp Image 2025-01-16 at 15.34.48_ed94d1e0 (2).jpg";
import img7 from "../../images/WhatsApp Image 2025-01-16 at 15.34.49_4ffe9dea (2).jpg";
import img8 from "../../images/WhatsApp Image 2025-01-16 at 15.34.45_31dcb7d8 (2).jpg";
import img9 from "../../images/WhatsApp Image 2025-01-16 at 15.34.45_47cc19af (2).jpg";

export const CleanWater = () => {
  return (
    <div className=" rounded-lg xl:px-28 mt-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <h3 className="mb-2 text-center text-2xl font-medium leading-tight text-black">
        WATER WELL FOR THE MASJID
      </h3>
      <p className="mb-4 ">
        Alhamdulilah ❤ A community water well was constructed and provided to
        the public for a Masjid in dire need in Sri Lanka with full support of
        MISS Charity! Thank you for your valuable support, MISS Charity Team💚
      </p>
      <a href="#!">
        <img className="rounded-2xl my-2 px-2" src={img1} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img2} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img3} alt="" />
        <p className="m-4 ">
          Community Water Well will provide access to clean drinking water &
          whudu facilities to more than 200 people.
        </p>
        <img className="rounded-2xl my-2 px-2" src={img4} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img5} alt="" />
        <p className="m-4 ">
          🕌Start the build a water well for masjid with just £475 | €555 |
          $590.
        </p>
        <img className="rounded-2xl my-2 px-2" src={img6} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img7} alt="" />
        <p className="m-8">
          Masha Allah, we thrilled to announce the successful completion of yet
          another water project, providing clean and safe drinking water to
          those in need. 💧✨
        </p>{" "}
        <img className="rounded-2xl my-2 px-2" src={img8} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img9} alt="" />
      </a>
      <div className="p-6">
        <p className="mt-8">
          Be a part of the change! Donate today and sponsor a life-saving
          project like this. Together, we can make a difference. 🌎
          www.hhmasrilanka.org 📩 hhmasrilanka@gmail.com 📞 +94 76 731 3385
        </p>
      </div>
    </div>
  );
};
export default CleanWater;
