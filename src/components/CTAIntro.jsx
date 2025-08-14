import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import BgImage from "../assets/cta-bg.jpg";

const CTAIntro = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });

  return (
    <section
      className="relative section-padding bg-black text-white min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
      <div className="container-custom relative z-10">
        <div
          ref={ref1}
          className="flex flex-col items-start text-left max-w-4xl"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-4xl mb-6 leading-tight"
          >
            Over 20 Years of Impact Across the UK, UAE and East Africa
          </motion.h2>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
          >
            Abdihakim Othman is a development strategist, consultant and social
            entrepreneur with more than two decades of experience delivering
            change across continents. From pioneering Somalia’s first
            mobile-enabled crowdfunding platform to leading nationwide digital
            skills programmes for young people, he blends private sector
            precision with grassroots development expertise.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#contact"
              className="relative border-2 px-8 py-4 font-semibold text-sm overflow-hidden group"
              style={{ borderColor: "#e1a87a", color: "white" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Work with Abdihakim
              </span>
              <div
                className="absolute inset-0 w-full h-full left-0 bottom-0 z-0 transition-transform duration-300 group-hover:translate-y-0 translate-y-full"
                style={{ backgroundColor: "#e1a87a" }}
              ></div>
            </motion.a>

            <motion.a
              href="#portfolio"
              className="relative border-2 px-8 py-4 font-semibold text-sm overflow-hidden group"
              style={{ borderColor: "#e1a87a", color: "white" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Explore My Portfolio
              </span>
              <div
                className="absolute inset-0 w-full h-full left-0 bottom-0 z-0 transition-transform duration-300 group-hover:translate-y-0 translate-y-full"
                style={{ backgroundColor: "#e1a87a" }}
              ></div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAIntro;
