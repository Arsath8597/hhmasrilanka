import React from 'react';
import { TERipple } from 'tw-elements-react';
import img1 from '../../images/WhatsApp Image 2023-10-25 at 15.17.58.jpeg'
export const CleanWater = () => {
  return (
      <div
        className=" rounded-lg xl:px-28 mt-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <h3
            className="mb-2 text-center text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
     Water Well
          </h3>
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={img1}
            alt="" />
        </a>
        <div className="p-6">
          
          <p className="mb-4 ">
          More than two-thirds of Sri Lankan's live in the rural areas where many still rely on shallow, hand dug wells or surface water bodies that are contaminated with parasites, toxic chemicals, and bacteria. Poor quality water can have serious health implications including: the increased prevalence of water-borne diseases such as cholera, typhoid, and dysentery; higher rates of child mortality; and greater chance of infection amongst mothers and new-borns. In the absence of adequate water and sanitation facilities, many other water-related diseases such as scabies, flea, lice and tick-borne diseases, as well as mosquito-borne diseases such as dengue, malaria, yellow fever and onchocerciasis occur
</p>
         
         
          <p className='mt-8'>
          Helping Hands of Muslim Association - Sri Lanka, has been working across rural Sri Lanka to ensure that villagers have access to clean drinking water at their disposal. Each borehole can support a small village with its water needs and prevents villagers from walking miles to access clean water.

          </p>
     
        </div>
      </div>
  );
}
export default CleanWater
