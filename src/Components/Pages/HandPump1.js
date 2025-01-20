import React from "react";
import img1 from "../../images/WhatsApp Image 2025-01-16 at 15.38.00_ab80191b (2).jpg";
import img2 from "../../images/WhatsApp Image 2025-01-16 at 15.38.02_597e8cef (2).jpg";
import img3 from "../../images/WhatsApp Image 2025-01-16 at 15.38.02_597e8cef (2).jpg";
import img4 from "../../images/WhatsApp Image 2025-01-16 at 15.38.02_a4a48145 (2).jpg";
import img5 from "../../images/WhatsApp Image 2025-01-16 at 15.38.03_01fc4c02 (2).jpg";
import img6 from "../../images/WhatsApp Image 2025-01-16 at 15.38.03_22c1efc7 (2).jpg";
import img7 from "../../images/WhatsApp Image 2025-01-16 at 15.38.03_ec790cac (2).jpg";
import img8 from "../../images/WhatsApp Image 2025-01-16 at 15.38.04_3c409404 (2).jpg";

export const CleanWater = () => {
  return (
    <div className=" rounded-lg xl:px-28 mt-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <h3 className="mb-2 text-center text-2xl font-medium leading-tight text-black">
        HAND PUMP WATER WELL
      </h3>
      <p className="mb-4 ">
        Alhamdulilah, a new hand pump water well has been successfully
        completed, bringing immense benefit to the families in Sri Lanka!
      </p>
      <a href="#!">
        <img className="rounded-2xl my-2 px-2" src={img1} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img2} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img3} alt="" />
        <p className="m-4 ">
          ❤Seek Allah’s pleasure through an act of Sadaqah Jariyah. 💧🤗Children
          are using your wells to bathe and wash their clothes. They are happy
          and feel the well. Please provide more such water wells for families
          and children.
        </p>
        <img className="rounded-2xl my-2 px-2" src={img4} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img5} alt="" />
        <p className="m-4 ">
          The total cost of a hand pump water well is £115 | €130 | $140. One
          family people are benefited through this well.
          <br />
          <br />
          Where there is no water, there is no education, no health, no dignity,
          no life. Give Water, Give Education, Give Dignity and Give Life.
        </p>
        <img className="rounded-2xl my-2 px-2" src={img6} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img7} alt="" />
        <p className="m-8">
          Hello Valuable Donors! A heartfelt thanks to the respectable donors.
          May Allah reward them🤲
        </p>{" "}
        <img className="rounded-2xl my-2 px-2" src={img8} alt="" />
      </a>
      <div className="p-6">
        <p className="mt-8">
          HHMA Sri Lanka has been working in Sri Lanka for several years,
          providing emergency food, health services, water and sanitation.
          During our decent deployment in this Sri Lanka, we performed hundreds
          of tube wells to local communities, and provided emergency aid to
          displaced communities in Trincomalee District.
        </p>
      </div>
      <div className="p-6">
        <p className="mt-8">
          Join us on our missions around the world and witness the positive
          impact we create together. <br />
          🗺 Our projects: Bringing water 💦
          <br /> Acting for health1 🩺 <br />
          Fighting hunger🥕🥬 <br />
          Improving access to education📚 <br />
          👀What you will see:
        </p>
      </div>
    </div>
  );
};
export default CleanWater;
