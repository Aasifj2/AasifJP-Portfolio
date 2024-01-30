'use client';

import { motion } from "framer-motion";
import {TypingText,StartSteps,TitleText } from '../components';
import styles from '../styles';
import { staggerContainer,fadeIn,planetVariants,textVariant } from '../utils/motion';
import { startingFeatures } from '../constants';
import {useState} from 'react';

const GetStarted = () => {

  return (

  <section className={`${styles.paddings} relative z-10`}>

    <motion.div 
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{once:true, amount:0.25}}
     className={`${styles.innerWidth} mx-auto flex flex-col`}>
    
       <TypingText className="sm:text-[1px]" title="| My Experience Worlds" textStyles="text-center" />
      
    </motion.div>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true,amount: 0.5 }}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 `}
    >
      <motion.div
      variants={planetVariants('left')}
      className={`flex-1 ${styles.flexCenter}`}
      >
        <img src="/get-started.png" className="w-[90%] h-[90%] object-contain" />
      </motion.div>

      <motion.div 
        variants={fadeIn('left','tween',0.2,1)} 
        className="flex-[0.95] flex justify-center flex-col" 
      >
      <div className="gradient-07 " />         
        <section className="glassmorphism-4 justify-start left-0  text-white absolute">
          <div className="text-card sm:text-[32px] text-[23px]">
          <h1 className="font1" style={{ display: "inline-block" }}><b>COMPANY:</b> &nbsp;<span className="font1">HEYHEY GLOBAL</span></h1>
          {/* <p style={{marginTop:"-8%"}}>_______________________</p> */}

          <div 
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          className="container">
            <div  className="hline-container">
              <div className="hline"></div>
            </div>
          </div>
            <br3></br3>
            <h2 className="font1 sm:text-[24px] text-[20px]" style={{ textAlign:'center' }}> &nbsp;<span className="bold font1 sm:text-[26px] text-[22px]" style={{color:"hsla(295, 95%, 52%, 0.973)"}}> Blockchain </span>And<span className="bold font1 sm:text-[26px] text-[22px]" style={{color:"hsla(295, 95%, 52%, 0.973)"}}>&nbsp; Backend</span> Developer</h2>
            <h2 className="font1 sm:text-[22px] text-[17px]" style={{ textAlign:'center'}}>AUG 2023 <b><span style={{color:"hsla(295, 95%, 52%, 0.773)"}}>•</span>··</b>·············<b>··<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}>•</span></b>PRESENT</h2>
            <p className="font1 sm:text-[22px] text-[17px]" style={{ textAlign:'center'}}> &nbsp;</p>
            <h2 className="font1 sm:text-[22px] text-[17px]" style={{ textAlign:'center' }}><b7>Tools and Technologies Used</b7></h2>
            <div className="hline-container" style={{ display: "flex", justifyContent: "center"}}>
              <div className="hline" style={{ width: "70%" }}></div>
            </div>
            
            <h3 className='sm:text-[16px] text-[18px] text-white relative
               font1 rounded-[5px]' style={{padding:'0.5rem'}}>
              <span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp; Solidity&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp; 
                NodeJs&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Quorum Blockchain&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                AWS EC2&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                AWS RDS DataBase&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                AWS S3 Buckets&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Kubernetes&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Smart-Contracts&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Ethers.js&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Express API&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Grafana Monitoring&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>
            </h3>
            
            
          </div>
        </section>
    
       
      </motion.div>
    
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 `}
    >
       <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter} sm:order-2 md:order-2`}
      >
        <img src="/full_planet2.png" className="w-[90%] h-[100%] object-contain" />
      </motion.div>

      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className={`flex-[0.95] flex justify-center flex-col sm:order-1`}
      >
        
        <div className="gradient-07 " />         
        <section className="glassmorphism-4 justify-start left-0  text-white absolute">
          <div className="text-card sm:text-[30px] text-[23px]">
          <h1 className="font1" style={{ display: "inline-block" }}><b>COMPANY:</b> &nbsp;<span className="font1">INSAANITY <span style={{color:"hsla(295, 95%, 52%, 0.773)"}}>/</span> ZEBPAY</span></h1>

          <div 
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          className="container">
            <div  className="hline-container">
              <div className="hline"></div>
            </div>
          </div>
            <br3></br3>
            <h2 className="font1 sm:text-[24px] text-[20px]" style={{ textAlign:'center' }}> &nbsp;<span className="bold font1 sm:text-[26px] text-[22px]" style={{color:"hsla(295, 95%, 52%, 0.973)"}}> Research </span>And<span className="bold font1 sm:text-[26px] text-[22px]" style={{color:"hsla(295, 95%, 52%, 0.973)"}}> Development </span>Engineer </h2>
            <h2 className="font1 sm:text-[22px] text-[17px]" style={{ textAlign:'center'}}>OCT 2022 <b><span style={{color:"hsla(295, 95%, 52%, 0.773)"}}>•</span>··</b>·············<b>··<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}>•</span></b>JULY 2023</h2>
            <p className="font1 sm:text-[22px] text-[17px]" style={{ textAlign:'center'}}> &nbsp;</p>
            <h2 className="font1 sm:text-[22px] text-[17px]" style={{ textAlign:'center' }}><b7>Tools and Technologies Used</b7></h2>
            <div className="hline-container" style={{ display: "flex", justifyContent: "center"}}>
              <div className="hline" style={{ width: "70%" }}></div>
            </div>
            
            <h3 className='sm:text-[16px] text-[18px] text-white relative
               font1 rounded-[5px]' style={{padding:'0.5rem',textAlign:'center'}}>
              <span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp; GoLang&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp; 
                NodeJs&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Threshold Key Management&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Threshold Cryptography&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;

                Solidity&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Smart-Contracts&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Ethers.js&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                AWS EC2&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;

                Goerli Network&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                P2P Networking&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
            </h3>
          </div>
        </section>
      </motion.div>
{/* 
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter} sm:order-2`}
      >
        <img src="/full_planet2.png" className="w-[90%] h-[100%] object-contain" />
      </motion.div> */}
    </motion.div>
   
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true,amount: 0.5 }}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 `}
    >
      
      <motion.div
      variants={planetVariants('left')}
      className={`flex-1 ${styles.flexCenter}`}
      >
        <img src="/full_planet3.png" className="w-[90%] h-[100%] object-contain" />
      </motion.div>
      <motion.div 
        variants={fadeIn('left','tween',0.2,1)} 
        className="flex-[0.95] flex justify-center flex-col" 
      >
      <div className="gradient-07 " />         
        <section className="glassmorphism-4 justify-start left-0  text-white absolute">
          <div className="text-card sm:text-[30px] text-[23px]">
          <h1 className="font1" style={{ display: "inline-block" }}><b>COMPANY:</b> &nbsp;<span className="font1">ZEBPAY</span></h1>
          {/* <p style={{marginTop:"-8%"}}>_______________________</p> */}

          <div 
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          className="container">
            <div  className="hline-container">
              <div className="hline"></div>
            </div>
          </div>
            <br3></br3>
            <h2 className="font1 sm:text-[24px] text-[20px]" style={{ textAlign:'center' }}> &nbsp;<span className="bold font1 sm:text-[26px] text-[22px]" style={{color:"hsla(295, 95%, 52%, 0.973)"}}> Research </span>And<span className="bold font1 sm:text-[26px] text-[22px]" style={{color:"hsla(295, 95%, 52%, 0.973)"}}> Development </span>Intern </h2>
            <h2 className="font1 sm:text-[22px] text-[17px]" style={{ textAlign:'center'}}>APRIL 2022 <b><span style={{color:"hsla(295, 95%, 52%, 0.773)"}}>•</span>··</b>·············<b>··<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}>•</span></b>OCT 2022</h2>
            <p className="font1 sm:text-[22px] text-[17px]" style={{ textAlign:'center'}}> &nbsp;</p>
            <h2 className="font1 sm:text-[22px] text-[17px]" style={{ textAlign:'center' }}><b7>Tools and Technologies Used</b7></h2>
            <div className="hline-container" style={{ display: "flex", justifyContent: "center"}}>
              <div className="hline" style={{ width: "70%" }}></div>
            </div>
            
            <h3 className='sm:text-[16px] text-[18px] text-white relative
               font1 rounded-[5px]' style={{padding:'0.5rem',textAlign:'center'}}>
              <span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp; GoLang&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp; 
                NodeJs&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Threshold Key Management&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Threshold Cryptography&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;

                Solidity&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Smart-Contracts&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                Ethers.js&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                AWS EC2&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;

                Goerli Network&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
                P2P Networking&nbsp;&nbsp;<span style={{color:"hsla(295, 95%, 52%, 0.773)"}}><b>|</b></span>&nbsp;
            </h3>
            
            
          </div>
        </section>
    
       
      </motion.div>
     
    
    </motion.div>
    
    
  </section>
)
      }

export default GetStarted;
