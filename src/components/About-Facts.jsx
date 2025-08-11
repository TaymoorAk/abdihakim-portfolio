import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import AboutImg from "../assets/images/2.jpg";
const PersonalIntroPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row mx-10 mt-24 mb-8">
        {/* Left side - Image with parallax */}

        {/* Right side - Content */}
        <motion.div
          className="lg:w-1/2 w-full flex flex-col justify-center md:px-8 lg:px-16 py-12 lg:py-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Random Facts Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h1 className="text-4xl lg:text-6xl font-light mb-8 tracking-wide ">
              Random Facts.
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed text-gray-300 font-light">
              I have a passion for coffee, I have a cat named after MacGyver, my
              favorite number is 22, love a good Old Fashion, I play video games
              like it's my life, I knew what I wanted to do at the age of 13, my
              favorite food is bacon, and I broke my left arm twice.
            </p>
          </motion.div>

          {/* Animated underline */}
          {/* <motion.div
            className="w-20 h-0.5 bg-white mt-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          /> */}
        </motion.div>
        <motion.div
          className="lg:w-1/2 w-full h-screen lg:h-auto relative overflow-hidden"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={AboutImg}
            alt="Modern cityscape with architecture"
            className="w-full h-full object-cover"
            style={{ y }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </motion.div>
      </div>
    </>
  );
};

export default PersonalIntroPage;
