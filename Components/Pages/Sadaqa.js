import React from 'react';
import { TERipple } from 'tw-elements-react';
import img1 from '../../images/IMG_20230319_162251.jpg'
export const CleanWater = () => {
  return (
      <div
        className=" rounded-lg xl:px-28 mt-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <h3
            className="mb-2 text-center text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Sadaqa
          </h3>
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={img1}
            alt="" />
        </a>
        <div className="p-6">
          
          <p className="mb-4 ">
          Sadaqah is a charity donation you can pay at any time of the year. Donate your Sadaqah to help the orphans, widows and families in need with many projects to empower them throughout the year.</p>
         
         
          <p className='mt-8'>
          Your Sadaqah Donation is used for many projects providing aid and relief through; education, housing, water and medical programs in Sri Lanka 🇱🇰.
          </p>
          <p className='mt-8'> 
          Have they not come to know that Allah is He who accepts repentance from His slaves and accepts Sadaqa (charity) and that Allah is Most-Relenting, Very-Merciful". (At-Tawbah 9:104)</p>
      
        </div>
      </div>
  );
}
export default CleanWater
