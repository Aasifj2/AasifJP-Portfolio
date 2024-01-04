'use client';
import { motion } from "framer-motion";
import styles from '../styles';
import RoundedPicture from "../components/Rounded";


import { fadeIn,slideIn, staggerContainer, textVariant } from '../utils/motion';
const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <div className="gradient-06 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}

        className="relative w-full md:-mt-[20px]">
          <img
            className="flex justify-center items-center flex-col z-10 Profileimage"
            src="aasif.png"
            alt="Profile"
            style={{
              // position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              // alignContent: 'center',
              // alignItems: 'center',
              // justifyContent: 'center',
              marginLeft: '-20px',
            }}
          />
    </motion.div>
      <div className="flex justify-center items-center flex-col relative z-10 ">
        <motion.h1 variants={textVariant(1)} className={`${styles.heroHeading} sm:ml-[0px] ml-[-22px]`}>
          Welcome <br/> 
          <span className="text-center lg:text-[70px] md:text-[60px] sm:text-[35px] text-[44px] block sm:ml-[-30px] ml-[-10px] " style={{ textAlign:'center'}}>To</span>
        </motion.h1>
        <motion.div
          variants={textVariant(1)}
          className="flex flex-row justify-center items-center sm:ml-[0px] ml-[-20px]">
          <h1 className={styles.heroHeading} >
            
            <span className="text-center block text-gradient">AJ.</span></h1>
          
          <h1 className={styles.heroHeading}>Verse</h1>
        </motion.div>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col justify-center items-center`}
      >
        {/* <motion.img
          variants={fadeIn('up','tween',0.6,1)}
          // src="/arrow-down.svg"

          className="w-[28px] h-[28px] object-contain mt-[28px]"
        /> */}
        
        <motion.div 
         variants={textVariant(1)}
         style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginLeft: '-50px'}}
        className="container">
          <motion.div variants={textVariant(1)} className="line-container">
            <motion.div variants={textVariant(1)} className="line"></motion.div>
          </motion.div>
        </motion.div>
    
      </motion.div>
    </motion.div>

  </section>
);

export default Hero;
