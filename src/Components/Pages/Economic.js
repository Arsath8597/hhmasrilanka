import React from 'react';
import { TERipple } from 'tw-elements-react';
import img1 from '../../images/swarajya_2022-05_085ad5a7-2788-42fb-af46-a8c04ea4a44f_FI3.avif'

const CleanWater = () => {
  return (
      <div
        className=" rounded-lg xl:px-28 mt-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <h3
            className="mb-2 text-center text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           Sri Lanka Economic Crisis Appeal
          </h3>
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={img1}
            alt="" />
        </a>
        <div className="p-6">
          
          <p className="mb-4 text-base text-black">
          Sri Lanka is facing the worst economic crisis in the world and with the rise of Covid-19 cases, Sri Lankan's are facing mortality daily. According to the Global Hunger Index, the situation in Sri Lanka is categorised as alarming with over 63% people severely food insecure.</p>
         
         <h2 className='text-xl font-semibold'>
         What is Helping Hands of Muslim Association - Sri Lanka doing in Sri Lanka?
          </h2>
          <p className='mt-8'>
          Helping Hands of Muslim Association - Sri Lanka is working tirelessly to alleviate the hardships of our brothers, sisters and children in Sri Lanka. We have teams on the ground providing Food Packs and clean water to help the famine-hit areas all year round.
         
          </p>
          <p className='mt-8'> 
          We work overtime to ensure the people of Sri Lanka are being fed, providing them with Warm Meals, distributing Zakat to the neediest as well as building a water station delivering clean drinking water to towns and villages in Camps and remote villages.
          </p>
          <h2 className='text-xl font-semibold mt-10'>
          How You Can Help</h2>
          <p className='mt-4'> 
          Help us reach thousands of families in desperate need of basic food essentials to survive. </p>
          <p className='mt-4'> 
          You can donate your Sadaqah or Zakat to the people of Sri Lanka who are in dire need of help.
</p>
          <p className='mt-4'> 
          Now is the time to help these economic crisis families and provide them with food and clean drinking water.

</p> <h2 className='text-xl font-semibold mt-10'>
This is where your donations are going in Sri Lanka</h2>
<p className='mt-6'> 
Helping Hands of Muslim Association - Sri Lanka is also running Empowerment Programs for orphans in Sri Lanka, providing them with school supplies and conducting IT courses to help them acquire skills to secure their future employment.

</p>
<p className='mt-6'> 
Join our journey of helping the people of Sri Lanka today!
</p>

        </div>
      </div>
  );
}
export default CleanWater
