import React from 'react';
import Image from 'next/image';
import { ArrowUpRightSquare, Github } from 'lucide-react';

// Data untuk proyek Anda. Saya pindahkan ke sini agar bisa diakses oleh JSX.
const projectsData = [
  {
    title: 'Aplikasi E-Commerce',
    description: 'Sebuah platform e-commerce lengkap dengan fitur keranjang belanja, pembayaran, dan panel admin untuk manajemen produk.',
    image: '/images/project-ecommerce.jpg', // Ganti dengan path gambar Anda
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Prisma'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/ecommerce',
  },
  {
    title: 'Website Landing Page',
    description: 'Desain landing page yang modern dan responsif untuk perusahaan SaaS, fokus pada konversi pengguna baru.',
    image: '/images/project-landingpage.jpg', // Ganti dengan path gambar Anda
    tags: ['React', 'Vite', 'Framer Motion'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/landing-page',
  },
  {
    title: 'Aplikasi Task Management',
    description: 'Aplikasi sederhana untuk manajemen tugas harian dengan fitur drag-and-drop dan otentikasi pengguna.',
    image: '/images/project-taskapp.jpg', // Ganti dengan path gambar Anda
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/task-app',
  },
];

// Komponen helper untuk seksi (tidak diubah)
const Section = ({ id, title, bgColor, children }: { id: string, title: string, bgColor: string, children: React.ReactNode }) => (
  <section id={id} className={`min-h-screen w-full flex flex-col justify-center items-center p-8 ${bgColor}`}>
    <div className="max-w-4xl text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">{title}</h2>
      <div className="text-lg text-gray-600">
        {children}
      </div>
    </div>
  </section>
);


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* ===== SEKSI HOME ===== */}
      <section id="home" className="min-h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-50">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">Selamat Datang di Portofolio Saya</h2>
          <div className="flex flex-col lg:flex-row items-center gap-28">
            <div className="flex-shrink-0">
              <div className="w-80 h-80 sm:w-96 sm:h-96 relative"> {/* Ukuran diubah ke nilai standar Tailwind */}
                <Image
                  src="/opang.jpg"
                  alt="Foto Profil opanG"
                  layout="fill" // Menggunakan layout fill untuk mengisi div
                  objectFit="cover" // Memastikan gambar meng-cover area tanpa distorsi
                  className="rounded-full border-8 border-gray-200" // border-6 diubah ke border-8
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Halo, Saya <span className="text-blue-600">opanG</span>
              </h3>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Saya adalah seorang <span className="font-semibold text-blue-600">Web Developer</span> yang bersemangat dalam menciptakan pengalaman digital yang luar biasa.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Website ini adalah tempat saya menampilkan proyek-proyek dan keahlian saya. Saya senang berbagi perjalanan saya dalam dunia pengembangan web dan teknologi terkini.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#projects" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors text-center">
                  Lihat Proyek Saya
                </a>
                <a href="#contact" className="border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center">
                  Hubungi Saya
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEKSI EXPERIENCE ===== */}
      <section id="experience" className="min-h-screen w-full flex flex-col justify-center items-center p-8 bg-blue-50">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">Experience</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kolom Pengalaman Kerja */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Pengalaman Kerja
              </h3>
              <div className="space-y-8">
                {/* Experience 1 */}
                <div className="border-l-4 border-blue-500 pl-6 relative">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-1.5"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-800">Frontend Developer</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">2023 - Sekarang</span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-2">PT. Tech Solutions Indonesia</p>
                  <p className="text-gray-600 leading-relaxed">
                    Mengembangkan aplikasi web menggunakan React.js dan Next.js, berkolaborasi dengan tim design untuk menciptakan user interface yang responsive dan user-friendly.
                  </p>
                </div>
                {/* Experience 2 & 3 (dan seterusnya) bisa ditambahkan di sini dengan struktur yang sama */}
              </div>
            </div>
            {/* Kolom Sertifikasi */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                Sertifikasi & Achievement
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">Dicoding Indonesia</div>
                  <div className="text-sm text-gray-600">Frontend Web Developer</div>
                  <div className="text-xs text-gray-500 mt-1">2023</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">Google Developer</div>
                  <div className="text-sm text-gray-600">AI & Web Development</div>
                  <div className="text-xs text-gray-500 mt-1">2024</div>
                </div>
                {/* Sertifikasi lainnya bisa ditambahkan di sini */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEKSI PROJECTS ===== (INI BAGIAN YANG DIPERBAIKI) */}
      <section id="projects" className="bg-slate-50 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Proyek yang Pernah Saya Buat
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Berikut adalah beberapa karya pilihan yang menunjukkan keahlian saya dalam teknologi web modern.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project, index) => (
              <div key={index} className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 text-xs font-semibold text-sky-800 bg-sky-100 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                      <ArrowUpRightSquare className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEKSI CONTACT ===== */}
      <Section id="contact" title="Hubungi Saya" bgColor="bg-white"> {/* Warna diubah agar kontras */}
        <p>
          Tertarik untuk bekerja sama atau punya pertanyaan?
          Jangan ragu untuk menghubungi saya melalui email atau LinkedIn.
        </p>
        <a href="mailto:kamu@email.com" className="mt-6 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          Kirim Email
        </a>
      </Section>
    </main>
  );
}