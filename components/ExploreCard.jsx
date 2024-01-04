'use client';

/* eslint-disable */

import { motion } from "framer-motion";
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title,skills, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.35, 0.95)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[1.2s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >

     <img
      src={imgUrl}

      className="absolute w-full h-full object-cover rounded-[24px]"
    //   style={{filter: active === id ? 
    //   'none'
    //    : 'brightness(0.75)',
    //   // border: active === id ? '1px solid white' : 'none'
    // }}

    />
    {active !== id ? (
      <h3
      className='font-semibold sm:text-[26px] text-[28px] text-white absolute z-0
      lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]  rounded-[5px] '>
        {title}
      </h3>
    ) : (
      <>
        <motion.h3 className='font-semibold sm:text-[16px] text-[18px] delay-700 text-white absolute z-0
        lg:bottom-10  lg:origin-[0,0] glassmorphism-2 font1 rounded-[5px]'>
          {title}
        </motion.h3>
        <ul className="absolute z-10 font1 sm:text-[16px] text-white text-sm  font-medium lg:top-5 glassmorphism-2 rounded-[5px]">
            {skills.map((skill, index) => (
              <li className="font1" key={index}>{skill}</li>
            ))}
          </ul>
      </>)}
  </motion.div>
);

export default ExploreCard;
