import React from "react";
import img1 from "../../images/WhatsApp Image 2025-01-16 at 15.47.01_409a2396 (2).jpg";
import img2 from "../../images/WhatsApp Image 2025-01-16 at 15.47.00_bc77f602 (2).jpg";
import img3 from "../../images/WhatsApp Image 2025-01-16 at 15.46.59_e1fe584a (2).jpg";
import img4 from "../../images/WhatsApp Image 2025-01-16 at 15.46.59_7cc5def7 (2).jpg";
import img5 from "../../images/WhatsApp Image 2025-01-16 at 15.47.02_56d92e02 (2).jpg";
import img6 from "../../images/WhatsApp Image 2025-01-16 at 15.47.04_58bfd45e (2).jpg";
import img7 from "../../images/WhatsApp Image 2025-01-16 at 15.47.05_752aff18 (2).jpg";
import img8 from "../../images/WhatsApp Image 2025-01-16 at 15.47.05_f805c3ee (2).jpg";

import img9 from "../../images/WhatsApp Image 2025-01-16 at 15.48.46_23e91c1e (2).jpg";

export const CleanWater = () => {
  return (
    <div className=" rounded-lg xl:px-28 mt-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <h3 className="mb-2 text-center text-2xl font-medium leading-tight text-black">
        COMMUNITY WATER WELL
      </h3>
      <p className="mb-4 ">
        Help us build Community Water Well in the Trincomalee region of Sri
        Lanka. This is a deep-water station located in the Munaichenai Village
        in the Eastern part of Sri Lanka next to the community. Community Water
        Well will provide access to clean drinking water to more than 10
        families.
      </p>
      <a href="#!">
        <img className="rounded-2xl my-2 px-2" src={img1} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img2} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img3} alt="" />
        <p className="m-4 ">
          Start the construction of a Water Well with just £475 | €555 | $590.
          💧🕌💙
          <br />
          With your support, HHMA Sri Lanka can begin building a water well.
        </p>
        <img className="rounded-2xl my-2 px-2" src={img4} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img5} alt="" />
        <p className="m-4 ">
          💧This vital resource will provide clean and sustainable water to
          those in desperate need, making a lasting impact on their lives.{" "}
          <br />
          Let’s join hands this new year and make this dream a reality. Your
          contribution, no matter the size, will bring us closer to this goal.
        </p>
        <img className="rounded-2xl my-2 px-2" src={img6} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img7} alt="" />
        <p className="m-8">
          Giving Water is the best form of Charity - Prophet Mohammad (SAW)
          Invest in Your Akhirah and provide the best of charities to the ones
          who need it most around the World, and may you see it as a mountain of
          rewards in the Hereafter.
        </p>{" "}
        <img className="rounded-2xl my-2 px-2" src={img8} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img9} alt="" />
      </a>
      <div className="p-6">
        <p className="mt-8">
          Donate now and earn the reward of building a water well. <br />
          👉 Donate today to HHMA Sri Lanka <br /> hhmasrilanka.org 📩
          hhmasrilanka@gmail.com <br />
          📞 +94 76 731 3385 [Official WhatsApp]
        </p>
      </div>
    </div>
  );
};
export default CleanWater;
