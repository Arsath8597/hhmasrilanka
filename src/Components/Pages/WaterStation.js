import React from 'react';
import { TERipple } from 'tw-elements-react';
import img1 from '../../images/WhatsApp Image 2023-10-25 at 15.34.36.jpeg'
import img2 from '../../images/WhatsApp Image 2023-10-25 at 15.34.35.jpeg'
import img3 from '../../images/WhatsApp Image 2023-10-25 at 15.34.34.jpeg'
import img4 from '../../images/WhatsApp Image 2023-10-25 at 15.34.38.jpeg'
import img5 from '../../images/WhatsApp Image 2023-10-25 at 15.34.38 (1).jpeg'
import img6 from '../../images/WhatsApp Image 2023-10-25 at 15.34.38 (2).jpeg'


export const CleanWater = () => {
  return (
      <div
        className=" rounded-lg xl:px-28 mt-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <h3
            className="mb-2 text-center text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Deep Water Well
          </h3>
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={img1}
            alt="" />
        </a>
        <a href="#!">
          <img
            className="rounded-t-lg mt-10"
            src={img2}
            alt="" />
        </a>
        <a href="#!">
          <img
            className="rounded-t-lg mt-10"
            src={img3}
            alt="" />
        </a>
        <a href="#!">
          <img
            className="rounded-t-lg mt-10"
            src={img4}
            alt="" />
        </a>
        <a href="#!">
          <img
            className="rounded-t-lg mt-10"
            src={img5}
            alt="" />
        </a>
        <a href="#!">
          <img
            className="rounded-t-lg mt-10"
            src={img6}
            alt="" />
        </a>
        <div className="p-6">
          
          <p className="mb-4 ">
          Lack of access to safe drinking water disproportionately impacts poor communities. The resulting disease, lost income, and wasted time have devastating effects on families. Water-borne illnesses are among the leading causes of childhood mortality Sri Lanka.</p>
         
         
          <p className='mt-8'>
          Increasing access to clean water remains a pressing challenge globally. Helping Hands of Muslim Association - Sri Lanka, aims to help address this need by drilling deep water wells in under-served communities locally.

          </p>
          <p className='mt-8'> 
          These sustainable deepwater wells offer users a reliable, long-term source of potable water for years to come. In rural areas, they serve as a lifeline by potentially being the sole supply of safe water. The wells bring convenience, health benefits, and improved quality of life for both children and adults.</p>
          <p className='mt-8'> 
          Well construction creates an ongoing act of charity by providing for communities far into the future. Donors to "Helping Hands of Muslim Association - Sri Lanka's " , well initiatives can thus expect lasting rewards from supplying accessible clean water to those most in need.</p>
          
        </div>
      </div>
  );
}
export default CleanWater
