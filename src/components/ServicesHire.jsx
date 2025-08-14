import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ServicesHire = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "1. Strategic Development Consulting",
      description: [
        "Project design and implementation",
        "Policy development and enterprise risk management",
        "Impact assessment and results based monitoring",
      ],
      delay: 0.1,
    },
    {
      title: "2. Digital Innovation and Crowdfunding Solutions",
      description: [
        "Mobile enabled fundraising platform development",
        "Digital skills training for young people",
        "Technology integration for NGOs and businesses",
      ],
      delay: 0.2,
    },
    {
      title: "3. Community Engagement and Capacity Building",
      description: [
        "Youth empowerment initiatives",
        "Skills based training academies",
        "Local to global market linkage strategies",
      ],
      delay: 0.3,
    },
    {
      title: "4. Business Development and Investment Advisory",
      description: [
        "Market research and entry strategies",
        "Investor relations and diaspora engagement",
        "ROI focused growth planning",
      ],
      delay: 0.4,
    },
  ];

  return (
    <section className="section-padding bg-black" ref={ref}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: service.delay }}
              className="bg-black p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-gray-300 transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.description.map((point, i) => (
                  <li
                    key={i}
                    className="text-gray-300 leading-relaxed before:content-['•'] before:text-orange-400 before:mr-2"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHire;
