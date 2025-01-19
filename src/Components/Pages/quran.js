import React from "react";
import img1 from "../../images/WhatsApp Image 2025-01-16 at 16.06.30_f93a59a3.jpg";
import img2 from "../../images/WhatsApp Image 2025-01-16 at 16.06.31_0099137e (2).jpg";
import img3 from "../../images/WhatsApp Image 2025-01-16 at 16.06.31_ebd8f2ab (2).jpg";

import img4 from "../../images/WhatsApp Image 2025-01-16 at 16.06.33_9d0f244a (2).jpg";
import img5 from "../../images/WhatsApp Image 2025-01-16 at 16.06.34_b1392a4c (2).jpg";
import img6 from "../../images/WhatsApp Image 2025-01-16 at 16.06.40_70c35a10 (2).jpg";
import img7 from "../../images/WhatsApp Image 2025-01-16 at 16.06.38_b14966f9 (2).jpg";
import img8 from "../../images/WhatsApp Image 2025-01-16 at 16.06.35_9f3cd81f (2).jpg";

export const CleanWater = () => {
  return (
    <div className=" rounded-lg xl:px-28 mt-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <h3 className="mb-2 text-center text-2xl font-medium leading-tight text-black">
        QURAN GIVING
      </h3>
      <p className="mb-4 ">
        The Quran you donated was delivered to the children in the madrasah and
        the beautiful smiles on their faces were captured by the cameras.
      </p>
      <a href="#!">
        <img className="rounded-2xl my-2 px-2" src={img1} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img2} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img3} alt="" />
        <p className="m-4 ">
          Let Your Gift Be a Quran ❤ We are giving Quran gifts to madrasahs to
          support the memorization education of our Muslim brothers in Sri
          Lanka. Contribute to the memorization of the future by donating a
          Quran.
        </p>
        <img className="rounded-2xl my-2 px-2" src={img4} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img5} alt="" />
        <p className="m-4 ">
          We are setting out in December to bring smiles to the faces of
          children. Let's spread more happiness together!
        </p>
        <img className="rounded-2xl my-2 px-2" src={img6} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img7} alt="" />
        <p className="m-8">
          You can also contribute to a child's access to the Quran by donating
          only $5. May Allah accept it.
          <br />
        </p>{" "}
        <img className="rounded-2xl my-2 px-2" src={img8} alt="" />
      </a>

      <div className="p-6">
        <p className="mt-8">
          For Detailed Information, Account Numbers and Online Donation;
          <br /> www.hhmasrilanka.org <br />
          📩 hhmasrilanka@gmail.com <br />
          📞 +94 76 731 3385 Telephone/WhatsAp
        </p>
      </div>
    </div>
  );
};
export default CleanWater;
