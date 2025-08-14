import react from "react";
import HomeHero from "../components/HomeHero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";
import CTAIntro from "../components/CTAIntro";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <HomeHero />
      <CTAIntro />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Testimonials />
      <BlogSection />
      <Footer />
    </>
  );
};
export default Home;
