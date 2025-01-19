import React from "react";
import img1 from "../../images/WhatsApp Image 2025-01-16 at 16.01.31_3595a840 (2).jpg";
import img2 from "../../images/WhatsApp Image 2025-01-16 at 16.01.31_3595a840 (2).jpg";
import img3 from "../../images/WhatsApp Image 2025-01-16 at 16.03.09_9b23ebe1 (2).jpg";
import img4 from "../../images/WhatsApp Image 2025-01-16 at 16.03.09_b65a6bc8 (2).jpg";
import img5 from "../../images/WhatsApp Image 2025-01-16 at 16.03.10_aefbdf35 (2).jpg";
import img6 from "../../images/WhatsApp Image 2025-01-16 at 16.03.12_555978ef (2).jpg";
import img7 from "../../images/WhatsApp Image 2025-01-16 at 16.03.14_3a989293.jpg";
import img8 from "../../images/WhatsApp Image 2025-01-16 at 16.03.15_5fc69e65 (2).jpg";

export const CleanWater = () => {
  return (
    <div className=" rounded-lg xl:px-28 mt-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <h3 className="mb-2 text-center text-2xl font-medium leading-tight text-black">
        💧The Prophet, peace be upon him, said: "The best charity is giving
        water to drink.) Ahmad).
      </h3>
      <p className="mb-4 ">
        Clean drinking water has the potential to bring communities out of
        poverty. Provide clean water for years to come to those who need it
        most. Your donations will give hope to impoverished communities by
        providing access to clean water. 💜Sponsor a Water Well Today.
      </p>
      <a href="#!">
        <img className="rounded-2xl my-2 px-2" src={img1} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img2} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img3} alt="" />
        <p className="m-4 ">
          We're giving you a gift like no other - the chance to change someone’s
          life forever! No matter how small the donation, you can make a massive
          impact.
        </p>
        <img className="rounded-2xl my-2 px-2" src={img4} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img5} alt="" />
        <p className="m-4 ">
          A water well can save a villager in Sri Lanka from walking miles every
          day. You too can be the end of poverty and the beginning of hope with
          our water well projects.
        </p>
        <img className="rounded-2xl my-2 px-2" src={img6} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img7} alt="" />
        <p className="m-8">
          Donate just £115 | €130 | $140 and Make a lasting difference through
          Sadaqah Jariyah.
          <br />
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
