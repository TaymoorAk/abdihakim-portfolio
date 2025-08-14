import React from "react";
import { motion } from "framer-motion";

const BackStory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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
      transition: { duration: 0.6, ease: "easeOut" },
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
          {/* Left Side - Content */}
          <motion.div
            className="lg:col-span-2 space-y-10 text-left"
            variants={containerVariants}
          >
            {[
              {
                year: "2008 to 2012",
                role: "The Listen Company / SERCO Group, UK",
                points: [
                  "Sales Associate for BSKYB (Sky Television, Fox News)",
                  "Managed B2B and B2C portfolios, CRM systems, and strategic retention initiatives",
                  "Served as Restorative Justice Panellist for Camden Council",
                ],
              },
              {
                year: "2013",
                role: "London Metropolitan Police Graduate Programme, UK",
                points: [
                  "Successfully accepted into the programme",
                  "Chose to pursue private sector and international opportunities",
                ],
              },
              {
                year: "2013 to 2014",
                role: "Regent Investment Consultancy, Dubai, UAE",
                points: [
                  "Business Development Manager for high-net-worth diaspora clients",
                  "Led investor engagement, outreach, and ROI-focused strategies",
                ],
              },
              {
                year: "2014 to 2022",
                role: "Shaqodoon Organisation & NGO Sector, East Africa",
                points: [
                  "Managed Bilan Digital Design Academy training youth in coding, design, and marketing",
                  "Co-created Sokaab crowdfunding platform, raising $2M+ for 100+ community projects",
                  "Supported similar platform for the SOMREP Consortium with international NGOs",
                ],
              },
              {
                year: "2022 to Present",
                role: "United Kingdom",
                points: [
                  "Completing MA in Project Management",
                  "Providing consultancy in programme design, monitoring & evaluation, and digital innovation",
                ],
              },
            ].map((job, index) => (
              <motion.div key={index} variants={paragraphVariants}>
                <h3 className="text-xl lg:text-2xl font-semibold text-[#e1a87a]">
                  {job.year} — {job.role}
                </h3>
                <ul className="mt-3 space-y-1 text-gray-300 text-base lg:text-lg font-light">
                  {job.points.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
                {index < 4 && (
                  <div className="border-t border-gray-700 mt-6"></div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Title */}
          <motion.div className="lg:col-span-1" variants={titleVariants}>
            <h1 className="text-white text-4xl md:text-4xl lg:text-5xl font-light leading-tight text-left">
              Career Journey.
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BackStory;
