import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Abdihakim is a visionary leader who understands how to connect communities with the tools they need to succeed.",
      author: "Development Partner",
      delay: 0.1,
    },
  ];
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <h2
          style={{ color: "#e1a87a" }}
          className="text-xl font-semibold text-center mb-16"
        >
          Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-1 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={true ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: testimonial.delay || index * 0.2,
              }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-lg italic leading-relaxed mb-6">
                  “{testimonial.quote}”
                </p>
                <span
                  style={{ color: "#e1a87a" }}
                  className="text-sm font-semibold tracking-wide"
                >
                  — {testimonial.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
