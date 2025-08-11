import React from "react";
import { motion } from "framer-motion";

const ServicesProcess = () => {
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

  const titleVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
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

  return (
    <div className="bg-black min-h-screen py-16 px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left side - Content (2/3 width) */}
          <motion.div
            className="lg:col-span-2 space-y-8 text-right"
            variants={containerVariants}
          >
            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              My project management process begins with understanding your
              objectives in detail — the “why” behind the project. I work to
              define clear goals, identify potential challenges, and outline a
              realistic roadmap before any execution begins.
            </motion.p>

            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              Communication is at the heart of how I work. I ensure that
              stakeholders are informed at every stage, timelines are met, and
              resources are optimized. Each project is unique, so I adapt my
              approach to align with your vision, team dynamics, and desired
              outcomes — ensuring we deliver results that matter.
            </motion.p>
          </motion.div>

          {/* Right side - Title (1/3 width) */}
          <motion.div className="lg:col-span-1" variants={titleVariants}>
            <h1 className="text-white text-4xl md:text-4xl lg:text-5xl font-light leading-tight">
              My Process.
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesProcess;
