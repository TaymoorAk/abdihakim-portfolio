import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProfessionalProfileSection = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding bg-black text-white ">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
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
            className="text-xl md:text-6xl mb-6 leading-tight"
          >
            Professional Profile
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
          >
            Abdihakim Othman is a globally experienced professional with a
            career spanning more than 20 years in the UK, UAE and East Africa.
            Holding a BA in Criminology and currently completing an MA in
            Project Management at Liverpool John Moores University, he
            specialises in business development, youth empowerment, digital
            innovation and sustainable community-led initiatives.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
          >
            His work combines strategic leadership, cultural insight and
            hands-on delivery, bridging the gap between international strategy
            and local implementation.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProfileSection;
