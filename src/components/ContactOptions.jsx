import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ContactOptions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Project Consultation",
      description:
        "Book a session to discuss your upcoming project, outline goals, and explore strategies to achieve them efficiently.",
      link: "BOOK CONSULTATION",
      delay: 0.1,
    },
    {
      title: "Full Project Management",
      description:
        "Need someone to handle planning, timelines, and coordination from start to finish? Let’s create a tailored project plan together.",
      link: "START A PROJECT",
      delay: 0.2,
    },
    {
      title: "General Inquiries",
      description:
        "Have a quick question or need advice on workflow, tools, or team collaboration? I’m happy to help.",
      link: "SEND MESSAGE",
      delay: 0.3,
    },
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
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

        {/* Direct Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-black py-16 mt-10"
        >
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-light mb-6 text-center">
              Or contact me directly
            </h2>
            <a
              href="mailto:hello@projectmanager.com"
              className="uppercase text-[#e1a87a] underline text-base md:text-lg mb-2 hover:text-[#f5d6b3] transition-colors"
            >
              HELLO@PROJECTMANAGER.COM
            </a>
            <a
              href="tel:7175251031"
              className="text-[#e1a87a] underline text-base md:text-lg mb-2 hover:text-[#f5d6b3] transition-colors"
            >
              (717) 525-1031
            </a>
            <span className="text-[#e1a87a] text-xs md:text-sm mt-1">
              (MON-FRI: 9AM - 4PM ET)
            </span>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default ContactOptions;
