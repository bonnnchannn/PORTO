'use client';
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Interface untuk props GoogleDrivePDFViewer
interface GoogleDrivePDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  driveFileId: string;
  fileName: string;
}



type ViewMode = 'embed' | 'actions';

const GoogleDrivePDFViewer: React.FC<GoogleDrivePDFViewerProps> = ({ 
  isOpen, 
  onClose, 
  driveFileId = "1Iwz6AaG9udBN1u6mpjB2mVus0bfUjtoz", 
  fileName = "CV new"
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('embed');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const previewUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;
  const viewUrl = `https://drive.google.com/file/d/${driveFileId}/view`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
  const handleLoad = (): void => setIsLoading(false);

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white p-8 rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden relative shadow-2xl"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-gray-900">CV Portfolio</h2>

        {/* Mode Toggle */}
        <div className="gap-1 mb-6 p-1 bg-gray-100 rounded-xl inline-flex">
          <button
            onClick={() => setViewMode('embed')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              viewMode === 'embed'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setViewMode('actions')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              viewMode === 'actions'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Actions
          </button>
        </div>

        {viewMode === 'embed' ? (
          <div className="w-full h-[70vh] border border-gray-200 rounded-xl overflow-hidden relative bg-gray-50">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-sm text-gray-600">Loading PDF...</p>
                </div>
              </div>
            )}
            <iframe
              src={previewUrl}
              width="100%"
              height="100%"
              title={`CV ${fileName}`}
              className="border-0"
              onLoad={handleLoad}
              allow="autoplay"
            />
          </div>
        ) : (
          <div className="w-full h-[70vh] border border-gray-200 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50">
            <div className="text-center max-w-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">View Options</h3>
              <p className="text-gray-600 mb-6 text-sm">Choose how you&apos;d like to access the CV</p>
              <div className="space-y-3">
                <button
                  onClick={() => window.open(viewUrl, '_blank', 'noopener,noreferrer')}
                  className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                >
                  Open in Google Drive
                </button>
                <button
                  onClick={() => window.open(downloadUrl, '_blank')}
                  className="w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom actions */}
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => window.open(viewUrl, '_blank', 'noopener,noreferrer')}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            View Online
          </button>
          <button
            onClick={() => window.open(downloadUrl, '_blank')}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Download
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Simple text animation component
const AnimatedText: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const HeroSection: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  const GOOGLE_DRIVE_FILE_ID = "1evDgdH-4UejDWOFl0aGCwpwgeGgB7RSP";
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const scrollToProjects = (): void => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleModal = (): void => setShowModal(!showModal);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-center items-center relative bg-white overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-70"
        style={{ y }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-70"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-30%']) }}
      />

      {/* Google Drive PDF Viewer Modal */}
      <GoogleDrivePDFViewer
        isOpen={showModal}
        onClose={toggleModal}
        driveFileId={GOOGLE_DRIVE_FILE_ID}
        fileName="Naufal Firman Dhani"
      />

      {/* Main Content */}
      <div className="max-w-6xl w-full px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 lg:order-1 text-center lg:text-left">
            <AnimatedText delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Available for projects
              </div>
            </AnimatedText>

            <AnimatedText delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Naufal
                </span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.6}>
              <h2 className="text-xl md:text-2xl text-gray-600 font-light">
                Web Developer & Digital Creator
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.8}>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                I create exceptional digital experiences through clean code and thoughtful design. 
                Passionate about bringing ideas to life on the web.
              </p>
            </AnimatedText>

            <AnimatedText delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  onClick={scrollToProjects}
                  className="group bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="button-bg"
                  />
                </motion.button>
                
                <motion.button
                  onClick={toggleModal}
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download CV
                </motion.button>
              </div>
            </AnimatedText>

            {/* Social Links */}
                <AnimatedText delay={1.2}>
                    <div className="flex justify-center lg:justify-start gap-4 pt-6">
                      {[
                        { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/bonnnchannn' },
                        { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/naufalfirmandhani' },
                        { name: 'Email', icon: <FaEnvelope />, url: 'opang16012005@gmail.com' },
                      ].map(({ name, icon, url }) => (
                        <motion.a
                          key={name}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center cursor-pointer transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title={name}
                        >
                          <span className="text-xl text-gray-600">
                            {icon}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                </AnimatedText>
          </div>

          {/* Image */}
          <motion.div 
            className="lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Profile Image */}
                <Image
                  src="/profil.jpg" // Gambar harus ada di folder /public
                  alt="Naufal - Web Developer"
                  width={300}       
                  height={400}      
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-2xl -z-10"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;