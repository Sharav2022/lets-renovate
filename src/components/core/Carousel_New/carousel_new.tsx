"use client";
import React, { useState } from 'react';
import styles from './carousel_new.module.scss';
import Image from 'next/image';
import { motion } from "framer-motion";


const Carousel_New = ({works}) => {
  //image index state
  const [activeIndex, setActiveIndex] = useState(0);

  //transition direction state
  const [transitionDirection, setTransitionDirection] = useState("next");

  //function to handle next button click
  const handleNext = () => {
    setTransitionDirection("next");
    setActiveIndex((prevIndex) => prevIndex === works.length-1 ? 0 : prevIndex + 1);
  }

  //function to handle previous button click
  const handlePrevious = () => {
    setTransitionDirection("previous");
    setActiveIndex((prevIndex) => prevIndex === 0 ? works.length-1 : prevIndex - 1);
  }

  // defining text animation
  const textVariants = {
    hidden: {
      opacity: 0,
      x: transitionDirection === "next" ? 100 : -100,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // defining stagger text effect
  const textContainerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };
  return (
    <div className={styles.carousalContainer}>
      <motion.div className={styles.contentContainer}
        key={activeIndex}
        variants={textContainerVariant}
        initial="hidden"
        animate="visible">
        <div className={styles.titleContainer}>
          <motion.h1 className={styles.title} variants={textVariants}>{works[activeIndex].title}</motion.h1>
        </div>
        <div className={styles.descriptionContainer}>
          <motion.p variants={textVariants}>{works[activeIndex].description}</motion.p>
        </div>
        {/*<div>*/}
        {/*  <button className={styles.nav}>Book a consultation</button>*/}
        {/*</div>*/}
      </motion.div>
      <div className={styles.imagesContainer}>
        <motion.div className={styles.firstContainer}
          animate={{
            zIndex:
              activeIndex % 3 === 0 ? 5 : activeIndex % 3 === 1 ? 3 : 4,
            opacity:
              activeIndex % 3 === 0 ? 1 : activeIndex % 3 === 1 ? 0.33 : 0.66,
            x:
              activeIndex % 3 === 0 ? "0px" : activeIndex % 3 === 1 ? "-192px" : "-96px",
            scale:
              activeIndex % 3 === 0 ? 1 : activeIndex % 3 === 1 ? 0.6 : 0.8,
          }}
          transition={{
            duration: 0.5,
            delay: 0,
            ease: "easeInOut",
          }}>
          <Image className={styles.workImage} alt="first image"
            src={activeIndex % 3 === 0
              ? works[activeIndex].mediaUrl
              : activeIndex % 3 === 1
                ? works[activeIndex+2>works.length-1?(activeIndex+2)%works.length:activeIndex+2].mediaUrl
                : works[activeIndex + 1>works.length-1?(activeIndex+1)%works.length:activeIndex+1].mediaUrl}
            width={545} height={365}></Image>
        </motion.div>
        <motion.div className={styles.secondContainer}
          animate={{
            zIndex:
              activeIndex % 3 === 0 ? 4 : activeIndex % 3 === 1 ? 5 : 3,
            opacity:
              activeIndex % 3 === 0 ? 0.66 : activeIndex % 3 === 1 ? 1 : 0.33,
            x:
              activeIndex % 3 === 0 ? "-96px" : activeIndex % 3 === 1 ? "0px" : "-192px",
            scale:
              activeIndex % 3 === 0 ? 0.8 : activeIndex % 3 === 1 ? 1 : 0.6,
          }}
          transition={{
            duration: 0.5,
            delay: 0,
            ease: "easeInOut",
          }}>
          <Image className={styles.workImage} alt="second image" 
          src={activeIndex % 3 === 0
            ? works[activeIndex + 1>works.length-1?(activeIndex+1)%works.length:activeIndex+1].mediaUrl
            : activeIndex % 3 === 1
              ? works[activeIndex].mediaUrl
              : works[activeIndex+2>works.length-1?(activeIndex+2)%works.length:activeIndex+2].mediaUrl}
               width={545} height={365}></Image>
        </motion.div>
        <motion.div className={styles.thirdContainer}
          animate={{
            zIndex:
              activeIndex % 3 === 0 ? 3 : activeIndex % 3 === 1 ? 4 : 5,
            opacity:
              activeIndex % 3 === 0 ? 0.33 : activeIndex % 3 === 1 ? .66 : 1,
            x:
              activeIndex % 3 === 0 ? "-192px" : activeIndex % 3 === 1 ? "-96px" : "0px",
            scale:
              activeIndex % 3 === 0 ? 0.6 : activeIndex % 3 === 1 ? 0.8 : 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0,
            ease: "easeInOut",
          }}>
          <Image className={styles.workImage} alt="third image" 
          src={activeIndex % 3 === 0
            ? works[activeIndex+2>works.length-1?(activeIndex+2)%works.length:activeIndex+2].mediaUrl
            : activeIndex % 3 === 1
              ? works[activeIndex + 1>works.length-1?(activeIndex+1)%works.length:activeIndex+1].mediaUrl
              : works[activeIndex].mediaUrl}
               width={545} height={365}></Image>
        </motion.div>

        <div className={styles.controls}>
          <button
            className={activeIndex === 0
              ? `${styles.disabled} ${styles.nav}`
              : `${styles.previousContainer} ${styles.nav}`
            }
            onClick={handlePrevious}>
            <Image alt="scroll previous"
              src='/svg/previous-enabled.svg'
              width={40}
              height={40}></Image>
          </button>
          <p className={styles.imageCount}>{activeIndex+1}/{works.length}</p>
          <button className={`${styles.nextContainer} ${styles.nav}`} onClick={handleNext}>
            <Image alt="scroll next" src='/svg/next-enabled.svg' width={40} height={40}></Image>
          </button>
       
        </div>
      </div>
    </div>
  )
}

export default Carousel_New
