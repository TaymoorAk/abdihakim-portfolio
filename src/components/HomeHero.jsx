import React, { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Play,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./Header";
import HeroBg from "../assets/hero-bg.jpg";

const NAV_LINKS = [
  { name: "HOME", to: "/" },
  { name: "ABOUT", to: "/about" },
  { name: "SERVICES", to: "/services" },
  { name: "CONTACT", to: "/contact" },
];

const SOCIALS = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
];

const SquarespaceHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Remove local active state, use NavLink's isActive
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openVideoPlayer = () => {
    setShowVideoPlayer(true);
  };

  const closeVideoPlayer = () => {
    setShowVideoPlayer(false);
  };

  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${HeroBg})`,
      }}
    >
      {/* Video Background - Enhanced for mobile */}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Navigation */}
      <Navbar />
      {/* White line after navbar */}
      <div className="w-full h-0.5 bg-white/20 relative z-20"></div>

      {/* Hero Content - Enhanced z-index */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-12">
            <span
              className="block mb-4"
              // style={{ fontFamily: "Playfair Display, serif" }}
            >
              Project Manager
            </span>
            <span
              className="block"
              // style={{ fontFamily: "Playfair Display, serif" }}
            >
              & Strategy Enthusiast
            </span>
          </h1>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
            {/* Hire an Expert Button */}
            <button className="border-2 border-[#e1a87a] px-10 py-5 font-semibold text-sm tracking-widest hover:bg-[#e1a87a] text-white transition-all duration-300 transform hover:scale-105 z-40 relative">
              HIRE AN EXPERT
            </button>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      {showVideoPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={closeVideoPlayer}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src="https://player.vimeo.com/video/357581440?h=fb2ef2ca32&autoplay=1"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Demo Video"
            ></iframe>
          </div>
        </div>
      )}

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

export default SquarespaceHero;
