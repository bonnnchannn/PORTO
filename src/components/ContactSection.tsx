'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, Variants } from 'framer-motion';
import { Send } from 'lucide-react';

// Varian animasi yang disederhanakan
const sectionFadeIn: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setFormStatus(null);

    // PERUBAHAN: Menggunakan environment variables untuk keamanan
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setFormStatus({ message: 'Pesan berhasil dikirim! Terima kasih.', type: 'success' });
          formRef.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          setFormStatus({ message: 'Maaf, terjadi kesalahan. Silakan coba lagi.', type: 'error' });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    // PERUBAHAN: Latar belakang lebih simpel
    <section id="contact" className="w-full bg-gray-50 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={sectionFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* PERUBAHAN: Animasi judul lebih sederhana */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Mari Terhubung
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Punya proyek atau pertanyaan? Saya siap membantu mewujudkan ide Anda. Kirimkan pesan di bawah ini.
          </p>

          {/* PERUBAHAN: Desain form di dalam 'card' */}
          <div className="mt-12 max-w-xl mx-auto bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 text-left block">Nama</label>
                <input
                  id="name"
                  type="text"
                  name="user_name" // 'name' adalah keyword, lebih baik gunakan 'user_name'
                  placeholder="your name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 text-left block">Email</label>
                <input
                  id="email"
                  type="email"
                  name="user_email"
                  placeholder="your @email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <div className="space-y-2">
                 <label htmlFor="message" className="text-sm font-medium text-gray-700 text-left block">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tulis pesan Anda di sini..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                ></textarea>
              </div>

              {/* PERUBAHAN: Tombol dengan state 'loading' dan notifikasi */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
              </div>

              {/* PERUBAHAN: Notifikasi dinamis pengganti 'alert()' */}
              {formStatus && (
                <div className={`mt-4 text-sm p-3 rounded-lg ${
                  formStatus.type === 'success'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}