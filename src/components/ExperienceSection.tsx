'use client';

import React from 'react';
import Image from 'next/image';
import { motion, easeInOut, easeOut } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

// Experience data
const webinars = [
  {
    title: "Build with AI x Google Cloud Roadshow Surabaya 2025",
    date: "May 2025",
    description: "Comprehensive workshop on AI/ML implementation in web development and modern frameworks.",
    tags: ["Machine Learning", "TensorFlow", "AI Integration"],
    color: "purple",
    image: "/gdg.jpg",
  },
  {
    title: "Pelatihan Bidang Teknologi Informasi (PIBITI 2023)",
    date: "Des 2023",
    description: "Basic training in web development and materials on website creation",
    tags: ["HTML", "CSS", "Javascript"],
    color: "gray",
    image: "/himatifa.png",
  },
  {
    title: "AI NEXUS: BRIDGING ACADEMY AND INDUSTRY",
    date: "Oct 2023",
    description: "Webinars and briefings on the current industrial world that must master artificial intelligence (AI).",
    tags: ["AI Integration", "Performance", "Industry Trends"],
    color: "blue",
    image: "/himatifa.png", 
  },
];

const certifications = [
  {
    title: "JavaScript Programming Basics",
    issuer: "Dicoding Indonesia",
    date: "Aug 2025",
    description: "Fundamentals of JavaScript programming, ES6 features, and automated testing concepts.",
    color: "blue",
    image: "/dicoding.png",
  },
  {
    title: "Web Programming Basics",
    issuer: "Dicoding Indonesia",
    date: "Oct 2024",
    description: "Core HTML and CSS components for front-end web development foundation.",
    color: "green",
    image: "/dicoding.png",
  },
  {
    title: "Learn the basics of Cloud and Gen AI on AWS",
    issuer: "Dicoding Indonesia",
    date: "Aug 2025",
    description: "Pelajari materi dasar Cloud dengan menggunakan AWS, dari konsep cloud computing, hingga penerapan generative AI dengan AWS.",
    color: "amber",
    image: "/dicoding.png",
  },
];

type ColorKey = "blue" | "purple" | "gray" | "green" | "amber";

const getColorClasses = (color: string) => {
  const colorMap: Record<ColorKey, string> = {
    blue: "bg-blue-50 border-blue-200 text-blue-600",
    purple: "bg-purple-50 border-purple-200 text-purple-600",
    gray: "bg-gray-50 border-gray-200 text-gray-600",
    green: "bg-green-50 border-green-200 text-green-600",
    amber: "bg-amber-50 border-amber-200 text-amber-600",
  };
  return colorMap[color as ColorKey] || colorMap.blue;
};

type ExperienceCardProps = {
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  color: string;
  tags?: string[];
};

const ExperienceCard = ({
  title,
  subtitle,
  date,
  description,
  image,
  icon,
  color,
  tags,
}: ExperienceCardProps) => (
  <motion.div
    variants={staggerItem}
    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
    whileHover={{ y: -4 }}
  >
    <div className="flex items-start gap-4">
      {/* Icon or Image */}
      <div className={`w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center ${getColorClasses(color)}`}>
        {image ? (
          <Image
            src={image}
            alt={title}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-xl">{icon}</span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 text-lg leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
            )}
          </div>
          <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap ml-3">
            {date}
          </span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            Learning & Growth
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Achievements
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Continuous learning through workshops, certifications, and hands-on experience in modern web technologies.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Webinars */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={staggerItem} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                Workshops & Training
              </h3>
              <p className="text-gray-600 text-sm">
                Recent webinars and training sessions I&#39;ve attended to stay current with technology.
              </p>
            </motion.div>

            <div className="space-y-4">
              {webinars.map((webinar, index) => (
                <ExperienceCard
                  key={index}
                  title={webinar.title}
                  date={webinar.date}
                  description={webinar.description}
                  color={webinar.color}
                  image={webinar.image}
                  tags={webinar.tags}
                />
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={staggerItem} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
                Certifications & Awards
              </h3>
              <p className="text-gray-600 text-sm">
                Formal certifications and recognitions that validate my skills and expertise.
              </p>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <ExperienceCard
                  key={index}
                  title={cert.title}
                  subtitle={cert.issuer}
                  date={cert.date}
                  description={cert.description}
                  color={cert.color}
                  image={cert.image}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-sm text-gray-500 font-medium">
              Always learning, always growing
            </span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
