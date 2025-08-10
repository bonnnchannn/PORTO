'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

// Data untuk proyek (diperluas untuk demonstrasi)
const projectsData = [
  {
    title: 'Aplikasi E-Commerce',
    description: 'Sebuah platform e-commerce lengkap dengan fitur keranjang belanja, pembayaran, dan panel admin untuk manajemen produk.',
    image: '/Sapu jagaD.png',
    tags: ['HTML', 'CSS', 'Javascript', 'PHP'],
    liveUrl: 'https://sapu.mimorivsl.com/',
    repoUrl: 'https://github.com/bonnnchannn/sapujagad',
  },
  {
    title: 'Recomendation System',
    description: 'Sebuah aplikasi rekomendasi film yang dibangun menggunakan algoritma machine learning sederhana.',
    image: '/pythonn.png',
    tags: ['Python', 'Streamlit'],
    liveUrl: 'https://opangflix.streamlit.app/',
    repoUrl: 'https://github.com/bonnnchannn/Recomendation-System',
  },
  // Tambahan project untuk demonstrasi fitur "show all"
  {
    title: 'Frontend Test API',
    description: 'Proyek frontend yang mengkonsumsi API untuk menampilkan data dari server, proyek ini untuk memenuhi test magang di suitmedia',
    image: '/suitmedia.png',
    tags: ['Tailwind', 'Next.js', 'API'],
    liveUrl: 'https://suitmedia-test-gold.vercel.app/',
    repoUrl: 'https://github.com/bonnnchannn/suitmedia-test',
  },
  {
    title: 'Prototype Dating App',
    description: 'Prototype aplikasi kencan yang dirancang untuk memberikan pengalaman pengguna yang intuitif dan menarik.',
    image: '/monamour.png',
    tags: ['Figma'],
    liveUrl: 'https://www.figma.com/design/PuaKmurO6hOI7Sj4N4fdhD/mon-amour--Copy-?node-id=1-3&t=oOb6mgSONkLIW9KT-1',
    repoUrl: 'https://github.com/your-username/task-app',
  },
  {
    title: 'Topologi jaringan menggunakan GNS3',
    description: 'Merancang dan mengimplementasikan topologi jaringan menggunakan GNS3 untuk simulasi jaringan yang kompleks',
    image: '/gns3.png',
    tags: ['GNS3', 'Mikrotik', 'Winbox'],
    liveUrl: 'https://figma.com/your-mobile-design',
    repoUrl: 'https://github.com/your-username/mobile-ui',
  },
  {
    title: 'Laundry System App',
    description: 'Aplikasi sistem laundry yang memudahkan user untuk melakukan order dan membantu admin mengelola pesanan',
    image: '/java.png',
    tags: ['Java', 'Java swing',],
    liveUrl: 'https://github.com/bonnnchannn/Laundry-System',
    repoUrl: 'https://github.com/bonnnchannn/Laundry-System',
  },
];

const sectionFadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: 'easeOut'
    }
  }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    },
  },
};

const itemFadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const initialDisplayCount = 3; // Jumlah project yang ditampilkan pertama kali
  
  const displayedProjects = showAllProjects 
    ? projectsData 
    : projectsData.slice(0, initialDisplayCount);

  const hasMoreProjects = projectsData.length > initialDisplayCount;

  const toggleShowAll = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <motion.section 
      id="projects" 
      className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 w-full"
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Proyek Pilihan Saya
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Berikut adalah beberapa karya yang menunjukkan keahlian saya dalam merancang dan membangun solusi digital.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div 
                key={`${project.title}-${index}`}
                variants={itemFadeInUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
                className="group bg-white rounded-2xl border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-xl"
                whileHover={{ y: -6 }}
              >
                <div className="overflow-hidden h-56">
                  <Image 
                    src={project.image}
                    alt={`Screenshot dari ${project.title}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900 pr-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-3 flex-shrink-0">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" title="Source Code" className="text-gray-400 hover:text-gray-800 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm flex-grow leading-relaxed mb-5">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Button untuk show/hide semua project */}
        {hasMoreProjects && (
          <motion.div 
            className="text-center mt-12"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              onClick={toggleShowAll}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-900 transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllProjects ? (
                <>
                  Tampilkan Lebih Sedikit
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Lihat Semua Project 
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </motion.button>
            
            {!showAllProjects && (
              <p className="mt-3 text-sm text-gray-500">
                Menampilkan {initialDisplayCount} dari {projectsData.length} project
              </p>
            )}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}