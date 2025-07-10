'use client';

import React from 'react';
import emailjs from '@emailjs/browser';
import { motion, Variants } from 'framer-motion';

// Animation variants for fading in and sliding up
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export default function ContactSection() {
  // Fungsi untuk menangani pengiriman formulir
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    // Kirim email menggunakan EmailJS
    emailjs
      .sendForm(
        'service_hcsllys', // Ganti dengan Service ID Anda dari EmailJS
        'template_0tdu139', // Ganti dengan Template ID Anda dari EmailJS
        form, // Kirim elemen form itu sendiri
        'ThFKHfblZzhGn2Wsi' // Ganti dengan User ID Anda dari EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Pesan berhasil dikirim!');
        },
        (error) => {
          console.log(error.text);
          alert('Terjadi kesalahan, pesan gagal dikirim.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-white to-indigo-100"
    >
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl text-center"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 tracking-wide"
          whileInView={{
            scale: [0.9, 1.05, 1],
            textShadow: [
              '0px 0px 0px rgba(59,130,246,0)',
              '0px 0px 20px rgba(59,130,246,0.3)',
              '0px 0px 0px rgba(59,130,246,0)',
            ],
          }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Hubungi Saya
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tertarik untuk bekerja sama atau punya pertanyaan? Jangan ragu untuk menghubungi saya
          melalui email atau LinkedIn. Saya akan segera merespon.
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Atau, kirim pesan langsung
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Anda"
                  required
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Anda"
                  required
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Pesan Anda"
                  rows={4}
                  required
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
