import React from 'react';
import { TERipple } from 'tw-elements-react';
import img1 from '../images/swarajya_2022-05_085ad5a7-2788-42fb-af46-a8c04ea4a44f_FI3.avif'
import { Link } from "react-router-dom";

export default function CardWithImageExample(): JSX.Element {
  return (
      <div 
        className="lg:flex rounded-lg xl:px-28  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <Link to="#!">
          <img
            className="rounded-t-lg"
            src={img1}
            alt="" />
        </Link>
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           Sri Lanka Economic Crisis Appeal
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Sri Lanka is facing the worst economic crisis in the world and with the rise of Covid-19 cases, Sri Lankan's are facing mortality daily. According to the Global Hunger Index, the situation in Sri Lanka is categorised as alarming with over 63% people severely food insecure.
          </p>
          <TERipple>
            <Link to='/Economic'
              type="button" 
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          See More
            </Link>
          </TERipple>
        </div>
      </div>
  );
}