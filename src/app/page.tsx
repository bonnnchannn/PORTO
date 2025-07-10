'use client';

import React, { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Add smooth scroll CSS dan custom animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      @keyframes gentle-bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-5px);
        }
        60% {
          transform: translateY(-3px);
        }
      }
      
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
        }
        50% {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        }
      }
      
      .scroll-indicator {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        transform-origin: 0%;
        z-index: 1000;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="scroll-indicator"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Import semua section sebagai komponen terpisah */}
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}