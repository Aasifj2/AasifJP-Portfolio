'use client';
import { motion } from "framer-motion";
import {TypingText,AboutMe} from '../components';
import styles from '../styles';


import { fadeIn, staggerContainer } from '../utils/motion';



const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.20 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />
      <motion.p
      variants={fadeIn('up','tween',0.2,1)}
      className="mt-[8px] font-normal sm:text-[25px] text-[20px] text-center text-secondary-white">
      <AboutMe />
      </motion.p>
      <motion.img
      variants={fadeIn('up','tween',0.1,1)}
      src="/arrow-down.svg"
      className="w-[28px] h-[28px] object-contain mt-[28px]"/>
    </motion.div>
  </section>
);


export default About;
