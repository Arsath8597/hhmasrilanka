import React from "react";
import img1 from "../../images/WhatsApp Image 2025-01-19 at 10.31.58_c4cd0e71 (2).jpg";
import img2 from "../../images/WhatsApp Image 2025-01-16 at 15.50.59_bdf2bce0 (2).jpg";
import img3 from "../../images/WhatsApp Image 2025-01-16 at 15.51.07_e426c9a1.jpg";
import img4 from "../../images/WhatsApp Image 2025-01-16 at 15.52.55_57c17c49 (2).jpg";
import img5 from "../../images/WhatsApp Image 2025-01-16 at 15.52.56_90a873d8 (2).jpg";
import img6 from "../../images/WhatsApp Image 2025-01-16 at 15.51.08_1020fc85.jpg";

export const CleanWater = () => {
  return (
    <div className=" rounded-lg xl:px-28 mt-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <h3 className="mb-2 text-center text-2xl font-medium leading-tight text-black">
        ORPHANS CARE RELIEF PROGRAM
      </h3>
      <p className="mb-4 ">
        💜 Most of the children we help don't have their parents, helping
        orphans is the main focus of our charity.
      </p>
      <a href="#!">
        <img className="rounded-2xl my-2 px-2" src={img1} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img2} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img3} alt="" />
        <p className="m-4 ">
          Without the sponsorship or help of a charitable organization, orphans
          would almost certainly have to work or beg. Orphans left alone are
          vulnerable to food shortages or disease. They are at high risk of
          being taken advantage of or abused. When you sponsor an orphan with
          our Charity Organization, you give him/her the opportunity to have a
          childhood, an education and a roof to sleep at night.
        </p>
        <p className="m-4 ">
          Orphan Care 👉
          https://www.facebook.com/share/p/BLLByBjFm2PAB93t/?mibextid=oFDknk
          <br />
          <br />
          "Helping Hands of Muslim Association - Sri Lanka" aims to help all
          kinds of children who need help. This includes poor children, orphans
          and children with disabilities. Our greatest satisfaction is seeing
          the children blossom for the help they have given us through our
          charity.
        </p>
        <img className="rounded-2xl my-2 px-2" src={img5} alt="" />
        <img className="rounded-2xl my-2 px-2" src={img4} alt="" />
        <p className="m-8">
          <p className="font-bold"> Monthly Orphan Care Relief</p>
          <br /> 💜 With £30 | €35 | $40. a month you give a poor child a chance
          to get an education.
        </p>{" "}
      </a>
      <div className="p-6">
        <img src={img6} />
        <p className="mt-8">
          Thanks to your donation, he can go to school instead of working and
          help pay for his education. You make his life meaningful and become
          part of his family and community. And sometimes this child may not
          have a family. Your sponsorship is the only way to change the path of
          an orphan's life that didn't start well.
          <br />
          💜Your donation will allow him to go to school and provide him with
          the essentials to live a dignified life. By helping an orphan he
          doesn't have to worry about work, hunger or begging for money. He will
          only focus on what he can learn in school. The knowledge he acquires
          through education is the basic foundation of his future.
          <br />
          Give the gift of a brighter future for just €35! By sponsoring an
          orphan, you can provide them with education, food, drinking water,
          medicine and health. 💚 Join us in making a difference in the life of
          a child in need.{" "}
        </p>
        <p className="my-5">
          Our mission is to allow disadvantaged children and orphans as peaceful
          and happy a childhood as possible.
          <br /> www.hhmasrilanka.org <br />
          📩 hhmasrilanka@gmail.com <br />
          📞 +94 76 731 3385
        </p>
      </div>
    </div>
  );
};
export default CleanWater;
