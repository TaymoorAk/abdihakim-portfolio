import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ServicesHire = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Step 1. Discovery & Alignment",
      description:
        "We begin with a focused conversation to understand your goals, challenges, and success criteria. This is where we define project scope, key milestones, and stakeholder expectations, ensuring everyone is on the same page before moving forward.",
      delay: 0.1,
    },
    {
      title: "Step 2. Planning & Execution",
      description:
        "Using the insights from our discovery session, I create a structured project plan with timelines, deliverables, and clear responsibilities. During execution, I manage resources, track progress, and ensure communication flows smoothly between all parties.",
      delay: 0.2,
    },
    {
      title: "Step 3. Review & Delivery",
      description:
        "Before final delivery, we review outcomes against the agreed objectives, making any necessary refinements. I also provide documentation, handover details, and actionable recommendations to ensure a smooth transition post-project.",
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHire;
