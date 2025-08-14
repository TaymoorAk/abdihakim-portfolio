import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/proprofile-bg.jpg";

const PhilosophyApproach = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative bg-black text-white py-20 px-6 lg:px-16 bg-cover bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dull overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Title */}
        <motion.h2
          className="text-4xl lg:text-6xl font-light mb-8 tracking-wide"
          variants={titleVariants}
        >
          Philosophy & Approach
        </motion.h2>

        {/* Content */}
        <motion.p
          className="text-lg lg:text-xl leading-relaxed text-gray-300 font-light mb-6"
          variants={paragraphVariants}
        >
          Abdihakim’s leadership style is rooted in{" "}
          <span className="text-orange-200">adaptability</span>,{" "}
          <span className="text-orange-200">collaboration</span> and a focus on{" "}
          <span className="text-orange-200">sustainable results</span>. His
          approach blends strategic foresight with a commitment to empowering
          teams, ensuring that every initiative delivers lasting value.
        </motion.p>

        <motion.p
          className="text-lg lg:text-xl leading-relaxed text-gray-300 font-light"
          variants={paragraphVariants}
        >
          Thriving at the intersection of{" "}
          <span className="text-orange-200">technology</span>,{" "}
          <span className="text-orange-200">entrepreneurship</span> and{" "}
          <span className="text-orange-200">social impact</span>, Abdihakim
          helps organisations scale innovative ideas that transform lives —
          turning bold visions into measurable change.
        </motion.p>

        {/* Accent line */}
        <motion.div
          className="w-24 h-1 bg-orange-200 mt-10"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        />
      </motion.div>
    </section>
  );
};

export default PhilosophyApproach;
