import React from "react";
import { motion } from "framer-motion";
import serviceBg from "../assets/service-bg.jpg";
import Navbar from "./Header";
const ServicesHero = () => {
  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${serviceBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      <Navbar />
      <div className="w-full h-0.5 bg-white/20 relative z-20"></div>

      {/* Hero Content - Enhanced z-index */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-12">
            <span
              className="block mb-4"
              // style={{ fontFamily: "Playfair Display, serif" }}
            >
              Digital Innovator
            </span>
          </h1>
        </div>
      </div>

      {/* Additional CSS for mobile video scaling */}
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-video-bg {
            min-height: 400vh !important;
            height: 400vh !important;
            transform: translate(-50%, -50%) scale(2.5) !important;
          }
        }

        @media (max-width: 480px) {
          .mobile-video-bg {
            min-height: 500vh !important;
            height: 500vh !important;
            transform: translate(-50%, -50%) scale(3) !important;
          }
        }

        @media (max-width: 375px) {
          .mobile-video-bg {
            min-height: 600vh !important;
            height: 600vh !important;
            transform: translate(-50%, -50%) scale(3.5) !important;
          }
        }
      `}</style>
    </div>
  );
};
export default ServicesHero;
