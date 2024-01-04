'use client';

import {motion} from 'framer-motion';
import styles from '../styles';
import {fadeIn,staggerContainer,zoomin} from '../utils/motion';
import { socials } from '../constants';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="show"
      whileInView="show"
      viewport={{once:true,amout:0.01}}
      className={`${styles.innerWidth} mx-auto flex lg-flex-row flex-col gap-6`}
      >
      <motion.div
      variants={fadeIn('right','tween',0.2,1)}
      className='flex-[0.5] flex justify-center flex-col gradient-05 sm:p-8 p-4
      rounded-[32px] border-[1px] border-[#6a6a6a]'
      >
        <div className='footer-gradient absolute' />
        <div style={{ display: 'flex',justifyContent:'space-between', alignItems: 'center' }}>
          <h4 className='font-bold sm:text-[32px] text-[20px] sm:ml-[40px] ml-[5px] sm:leading-[40px] leading-[36px] text-white'>
            AJ.Verse
          </h4>
          <div className='gap-4 flex sm:mr-[40px] mr-[5px]'>
                <a href=''><img
                src='twitter.svg'
                className='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
                <a href='https://www.linkedin.com/in/aasif-javid-091/'><img
                src='linkedin.svg'
                className='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
                <img
                src='instagram.svg'
                className='w-[24px] h-[24px] object-contain cursor-pointer'/>
                <a href='https://github.com/Aasifj2'><img
                src='github_simple.png'
                className='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
          
          </div>
        </div>

      </motion.div>

      </motion.div>
  </section>
);

export default Feedback;
