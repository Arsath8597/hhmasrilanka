import React from 'react';
import { TERipple } from 'tw-elements-react';
import img1 from '../../images/IMG-20240105-WA0067.jpg'
import img2 from '../../images/WhatsApp Image 2024-01-03 at 19.00.55_e8264ce5.jpg'
import img3 from '../../images/WhatsApp Image 2024-01-03 at 19.00.57_8e693c53.jpg'
import img4 from '../../images/WhatsApp Image 2024-01-03 at 19.00.57_eebcbef5.jpg'
export const CleanWater = () => {
  return (
      <div
        className=" rounded-lg xl:px-28 mt-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <h3
            className="mb-2 text-center text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    Water Is Life 

          </h3>
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={img1}
            alt="" />
             <img
            className="rounded-t-lg"
            src={img2}
            alt="" />
             <img
            className="rounded-t-lg"
            src={img3}
            alt="" />
             <img
            className="rounded-t-lg"
            src={img4}
            alt="" />
        </a>
        <div className="p-6">
          
          <p className="mb-4 ">
          The people in the Sri Lanka are facing the worst water crisis seen in the region in many years. The drought has made the availability of water one of the most valuable resources that very few have access to. Millions of families have to walk hours and sometimes even days in order to get just a few cups of drinking water.

</p>
         
         
          <p className='mt-8'>
          Providing water to those in need is a sadaqah jariyah (a continuous charity) and helps to fulfill a basic human right with a profound impact.

          </p>
          <p className='mt-8'>
       
Think about all of the ways clean water is needed and used and how much the health, growth, and stability of communities is dependent upon it. Without access to clean water, communities must endure incomprehensible hardships and the cycle of poverty will continue. Clean water is not only used for drinking but also for growing food and feeding livestock which adds to the health and success of a community. With less time spent on trying to collect clean water, children will have more time to spend on education and therefore able to have careers to contribute to the welfare of their communities. Women will have more time to work, start a business, better their homes and their lives.
          </p>
     
        </div>
      </div>
  );
}
export default CleanWater
