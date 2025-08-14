import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "🌍 International Expertise",
      description:
        "Experience across the UK, UAE and East Africa, partnering with organisations such as World Vision, IOM, Oxfam and CARE.",
      link: "LEARN MORE",
      delay: 0.1,
    },
    {
      title: "💡Innovation for Impact",
      description:
        "Creator of Sokaab, the first mobile enabled crowdfunding platform in Somalia and Somaliland, mobilising over 2 million dollars for community projects.",
      link: "VIEW PROCESS",
      delay: 0.2,
    },
    {
      title: "👥 Youth Empowerment",
      description:
        "Led nationwide programmes training hundreds of young people in coding, design and digital marketing.",
      link: "SEE HOW",
      delay: 0.3,
    },
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl  text-white mb-6">
            Key Highlights
          </h2>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I help teams and organizations bring ideas to life — managing
            timelines, resources, and communication to deliver projects on time
            and with impact.
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="bg-black p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 group"
            >
              <h3 className="text-3xl font-medium text-white mb-4 group-hover:text-gray-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-white mb-6 leading-relaxed">
                {service.description}
              </p>
              <motion.a
                href="#"
                style={{ color: "#e1a87a" }}
                className="inline-block text-white pb-1 text-xs hover:text-gray-300 hover:border-gray-300 transition-all duration-300 font-medium"
                whileHover={{ x: 5 }}
              >
                {service.link}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
