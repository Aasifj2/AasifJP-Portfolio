'use client';
/* eslint-disable */


import { motion } from "framer-motion";
import styles from '../styles';
import { navVariants } from '../utils/motion';



const Navbar = () => (

  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.01 }}
    className={`${styles.xPaddings} py-8 relative`}>
      

    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
    <a href="https://www.linkedin.com/in/aasif-javid-091/" style={{ zIndex: '1' }} target="_blank" >
      <img src="/linkedin.png"
        alt="LinkedIn"
        className="w-[60px] h-[60px] object-contain"
        style={{ marginTop: '0px' }}
      />
    </a>
      
      <h2 className="text-[40px] leading-[30.24px] text-white " style={{ marginTop: '1px'  }}>
      Aasif
      
      <br />
        <span className="text-center block text-[30px] text-gradient" ><u>Javid</u></span>
      </h2>
      <a href="https://github.com/Aasifj2" style={{ zIndex: '1' }} target="_blank">
      <img src="/github_.png"
        className="w-[60px] h-[60px] object-contain" />
      </a>
    </div>

  </motion.nav>

  
);

export default Navbar;
