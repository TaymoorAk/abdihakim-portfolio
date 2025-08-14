import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/ctabout-bg.jpg";

const ServicesText2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-black flex flex-col lg:flex-row items-center justify-center px-4 lg:px-24 md:py-20 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Content */}
      <div className="lg:w-1/2 w-full max-w-2xl mx-auto lg:pr-12">
        <motion.div
          className="text-left space-y-8 md:space-y-12"
          variants={containerVariants}
        >
          {/* Subtitle */}
          <motion.p
            className="text-orange-200 uppercase tracking-[0.2em] text-xs md:text-sm font-medium"
            variants={subtitleVariants}
          >
            Let’s Build Impact Together
          </motion.p>

          {/* Main heading */}
          <motion.h1
            className="text-white leading-tight text-xl sm:text-4xl md:text-4xl font-light"
            variants={textVariants}
          >
            If you are seeking a strategist who can merge innovation with
            sustainable impact, Abdihakim can help turn vision into reality.
          </motion.h1>

          {/* Contact Button */}
          <motion.button
            className="relative border-2 px-10 py-5 font-semibold text-sm overflow-hidden group"
            style={{ borderColor: "#e1a87a", color: "white" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              📩 Contact Abdihakim – Start a Conversation Today
            </span>
            <div
              className="absolute inset-0 w-full h-full left-0 bottom-0 z-0 transition-transform duration-300 group-hover:translate-y-0 translate-y-full"
              style={{ backgroundColor: "#e1a87a" }}
            ></div>
          </motion.button>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        className="lg:w-1/2 w-full h-96 lg:h-full relative mt-12 lg:mt-0 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={AboutImg}
          alt="Impactful work"
          className="w-full h-full object-cover rounded"
        />
        {/* Dark overlay for dullness */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
      </motion.div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default ServicesText2;
