import React from 'react';

import img1 from '../../images/IMG-20230503-WA0114.jpg'

export const CleanWater = () => {
  return (
      <div
        className=" rounded-lg xl:px-28 mt-28 mt-40  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <h3
            className="mb-2 text-center text-2xl font-medium leading-tight text-black">
       Zakat AL-MAL
          </h3>
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={img1}
            alt="" />
        </a>
        <div className="p-6">
          
          <p className="mb-4 ">
          Zakat is one of the Five Pillars of Islam. It is an Islamic duty for every Muslim to pay a donation on their wealth to the Muslim community in need around the world. Providing much-needed charity relief through Zakat Al Maal payments to be paid by Muslims donating a minimum of 2.5% of their wealth. We have a 100% Donation Policy on all Zakat donations.</p>
         
         
          <p className='mt-8'>
          Zakat is important for many reasons. Firstly Zakat is a Pillar of Islam and if one has sufficient wealth and does not fulfil their obligation of paying their Zakat then they are committing a major sin.

          </p>
          <p className='mt-8'> 
          Zakat is the right of the poor and needy Muslims. By paying your Zakat you are helping the lower and middle classes of society which raises economic activity and productivity and reduces poverty which in turn helps in the redistribution of wealth.</p>
          <p className='mt-8'> 
          Through Zakat, Allah also blesses your wealth and causes it to grow.</p>
          
        </div>
      </div>
  );
}
export default CleanWater
