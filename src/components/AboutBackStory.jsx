import React from "react";
import { motion } from "framer-motion";

const BackStory = () => {
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
    hidden: { opacity: 0, x: -50 },
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
          {/* Left side - Title (1/3 width) */}
          <motion.div
            className="lg:col-span-2 space-y-8 text-right"
            variants={containerVariants}
          >
            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              My journey into project management began earlier than most would
              expect. While still in school, I found myself naturally stepping
              into leadership roles — organizing group projects, setting
              timelines, and ensuring everyone stayed on track. What started as
              a way to help my classmates succeed quickly grew into a passion
              for guiding complex initiatives from start to finish.
            </motion.p>

            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              Over time, I discovered that I thrived in the space where ideas
              meet execution. I learned how to translate broad visions into
              structured plans, create clear communication channels between
              stakeholders, and manage resources efficiently. Even before
              project management tools became the norm, I was creating my own
              systems to keep teams aligned.
            </motion.p>

            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              My professional career began in a fast-paced environment where
              meeting deadlines and delivering results were non-negotiable.
              These early experiences sharpened my ability to assess risks,
              prioritize effectively, and maintain focus under pressure — skills
              that remain at the core of my approach today.
            </motion.p>

            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              After several years of leading projects across different
              industries,{" "}
              <span className="underline decoration-orange-400 underline-offset-4 cursor-pointer hover:text-orange-400 transition-colors duration-300">
                I decided to step out on my own
              </span>
              . This allowed me to work directly with organizations of all sizes
              — from startups needing structure to established companies looking
              to optimize processes — and deliver tailored solutions for each.
            </motion.p>

            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              Today, my work goes beyond simply managing tasks. I focus on
              creating sustainable frameworks, empowering teams, and fostering
              collaboration that leads to measurable impact.{" "}
              <span className="underline decoration-orange-400 underline-offset-4 cursor-pointer hover:text-orange-400 transition-colors duration-300">
                Building successful projects
              </span>{" "}
              is more than just hitting deadlines — it’s about bringing people
              together to create something greater than the sum of its parts.
            </motion.p>
          </motion.div>

          <motion.div className="lg:col-span-1" variants={titleVariants}>
            <h1 className="text-white text-4xl md:text-4xl lg:text-5xl font-light leading-tight text-left">
              Back Story.
            </h1>
          </motion.div>

          {/* Right side - Content (2/3 width) */}
        </div>
      </motion.div>
    </div>
  );
};

export default BackStory;
