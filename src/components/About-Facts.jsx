import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { CheckCircle } from "lucide-react";
import AboutImg from "../assets/images/2.jpg";

const PersonalIntroPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const skills = [
    "Foundation PMP",
    "Results Based Monitoring & Evaluation",
    "Crowdfunding for Development",
    "Strategic Planning",
    "Risk Management",
    "Policy Development",
    "Youth Empowerment",
    "Digital Innovation",
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row mx-10 mt-24 mb-8">
      {/* Left Side - Skills */}
      <motion.div
        className="lg:w-1/2 w-full flex flex-col justify-center md:px-8 lg:px-16 py-12 lg:py-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-12" variants={cardVariants}>
          <h1 className="text-4xl lg:text-6xl font-light mb-6 tracking-wide">
            Skills & Certifications
          </h1>
          <p className="text-gray-400 text-lg max-w-lg">
            A proven blend of academic qualifications, practical expertise, and
            global experience that drives measurable results in every project.
          </p>
        </motion.div>

        {/* Animated skill cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-orange-400 transition-colors duration-300"
            >
              <CheckCircle className="text-[#e1a87a] w-6 h-6 flex-shrink-0" />
              <span className="text-lg font-light">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Side - Parallax Image */}
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
  );
};

export default PersonalIntroPage;
