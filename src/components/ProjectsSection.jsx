import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import projectImage from "../assets/prj-img.jpg";
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Sokaab Crowdfunding Platform",
      image: projectImage,
      delay: 0.1,
      description:
        "The first of its kind in Somalia and Somaliland which funded more than 100 locally led projects and influenced international development models.",
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
          <h2 style={{ color: "#e1a87a" }} className="lg:mb-6">
            Feature Project
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white sm:mb-6 md:mb-6 lg:mb-20 lg:mx-32"></h2>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each project represents a unique challenge and solution, showcasing my ability to 
            create custom digital experiences that drive results.
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: project.delay }}
              className="group"
            >
              {/* Define columns here */}
              <div className="grid grid-cols-12 gap-12 items-center">
                {/* Image section - spans 8 columns */}
                <div className="col-span-12 md:col-span-6 ">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  </div>

                  <h3
                    style={{ color: "#e1a87a" }}
                    className="text-sm font-bold text-white mb-2 group-hover:text-gray-300 transition-colors underline"
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description section - spans 4 columns */}
                <div className="col-span-12 md:col-span-4 text-xl md:text-2xl">
                  {project.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
