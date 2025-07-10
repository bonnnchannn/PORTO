'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import SplitText from '@/app/TextAnimations/SplitText/SplitText';

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
  driveFileId, 
  fileName 
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
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white p-6 rounded-lg max-w-5xl w-full max-h-[95vh] overflow-hidden relative"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-800 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">CV Saya</h2>

        {/* Mode Toggle */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setViewMode('embed')}
            className={`px-4 py-2 rounded transition-all duration-200 ${
              viewMode === 'embed'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Tampil di Sini
            </div>
          </button>
          <button
            onClick={() => setViewMode('actions')}
            className={`px-4 py-2 rounded transition-all duration-200 ${
              viewMode === 'actions'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Opsi Lainnya
            </div>
          </button>
        </div>

        {viewMode === 'embed' ? (
          <div className="w-full h-[70vh] border rounded-lg overflow-hidden relative bg-gray-100">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Memuat PDF dari Google Drive...</p>
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
          <div className="w-full h-[70vh] border rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="text-center max-w-md">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <svg className="w-20 h-20 text-blue-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Pilih cara untuk melihat CV</h3>
                <p className="text-gray-600 mb-6">Pilih salah satu opsi di bawah untuk melihat atau mengunduh CV saya</p>
                <div className="space-y-3">
                  <button
                    onClick={() => window.open(viewUrl, '_blank', 'noopener,noreferrer')}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Buka di Google Drive
                  </button>
                  <button
                    onClick={() => window.open(downloadUrl, '_blank')}
                    className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action buttons - always visible */}
        <div className="mt-4 flex justify-center gap-3 flex-wrap">
          <button
            onClick={() => window.open(viewUrl, '_blank', 'noopener,noreferrer')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Buka di Google Drive
          </button>
          <button
            onClick={() => window.open(downloadUrl, '_blank')}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
};

const smoothScrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const button = document.activeElement as HTMLElement;
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    }
    element.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      element.style.animation = 'gentle-bounce 0.6s ease-out';
      setTimeout(() => {
        element.style.animation = '';
      }, 600);
    }, 800);
  }
};

const HeroSection: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const GOOGLE_DRIVE_FILE_ID = "1evDgdH-4UejDWOFl0aGCwpwgeGgB7RSP";
  const toggleModal = (): void => setShowModal(!showModal);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden relative">
      {/* Google Drive PDF Viewer Modal */}
      <GoogleDrivePDFViewer
        isOpen={showModal}
        onClose={toggleModal}
        driveFileId={GOOGLE_DRIVE_FILE_ID}
        fileName="Naufal Firman Dhani"
      />

      <h1 className="text-center mb-16">
  <SplitText 
    text="Selamat Datang di Portofolio Saya"
    duration={1.0}
    delay={50}
    splitType="chars"
    from={{ opacity: 0, y: 20 }}
    to={{ opacity: 1, y: 0 }}
    className="text-6xl md:text-6xl font-bold text-black block"
  />
</h1>

      {/* Hero Section Content */}
      <motion.div className="max-w-4xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">
          <motion.div 
            className="flex-shrink-0"
            variants={scaleIn}
            initial="initial"
            animate="animate"
          >
            <div className="w-80 h-80 sm:w-96 sm:h-110 relative group">
              <Image
                src="/profil.jpg"
                alt="Foto Profil Naufal - Web Developer"
                fill
                className="rounded-xl border-6 border-[white] shadow-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Nama dengan animasi SplitText */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
             <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Halo, Saya <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Naufal</span>
            </motion.h2>
            </motion.div>

            {/* Deskripsi dengan animasi SplitText */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.p 
                className="text-xl text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Saya adalah seorang Web Developer yang bersemangat dalam menciptakan pengalaman digital yang luar biasa.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.p 
                className="text-xl text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
              Website ini adalah tempat saya menampilkan proyek-proyek dan keahlian saya. Saya senang berbagi perjalanan saya dalam dunia pengembangan web dan teknologi terkini.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.button
                onClick={() => smoothScrollTo('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transform transition-all duration-300 text-center relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                aria-label="Lihat proyek-proyek saya"
              >
                <motion.span
                  className="absolute inset-0 bg-white opacity-0"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Lihat Proyek Saya</span>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-white"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button
                onClick={toggleModal}
                className="border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-center relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  borderColor: "#8b5cf6"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Lihat CV"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Lihat CV</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;