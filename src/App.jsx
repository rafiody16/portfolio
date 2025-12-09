import { useRef, useState } from "react";
import DataImage, { listTools, techStack, listCert } from "./data";
import CertificateModal from "./components/CertificateModal"; 
import cvFile from "/assets/CV_ATS_Indonesia Ver.pdf";

function App() {
  const scrollRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.offsetWidth / 1;

      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  };

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-32 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Rafi Ody Prasetyo</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Perkenalkan, nama saya Rafi Ody Prasetyo. Sebagai mahasiswa Teknologi Informasi di Politeknik Negeri Malang. Saya memiliki minat spesifik dalam pengembangan perangkat lunak, teknologi web, dan rekayasa data. Melalui berbagai proyek yang saya kerjakan, saya terus mengasah kemampuan problem-solving dan teknis saya. Tujuan saya sederhana: tumbuh menjadi developer yang serba bisa dan siap berkontribusi dalam industri teknologi.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href={cvFile} download="CV_Rafi_Ody_Prasetyo.pdf" className="bg-violet-500 p-4 rounded-2xl hover:bg-violet-300">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="" className="w-[420px] h-[500px] rounded-2xl md:ml-auto" />
      </div>

      <div id="tentang" className="tentang mt-32 py-10 px-4">
        <div className="w-full max-w-6xl max-auto p-8 bg-zinc-800 rounded-xl shadow-lg border-zinc-700/50">
          <div className="mb-8">
            <h3 className="text-zinc-300 font-semibold text-lg mb-6 text-center border-b border-zinc-600 pb-2 w-fit mx-auto px-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-8 justify-center">
              {techStack.map((tech) => (
                <div key={tech.id} className="group flex flex-col items-center gap-3 w-20">
                  <div className="p-3 bg-zinc-700/50 rounded-lg group-hover:bg-zinc-700 transition duration-300">
                    <img
                      src={tech.gambar}
                      alt={tech.nama}
                      className="w-10 h-10 object-contain opacity-75 group-hover:opacity-100 transition duration-300"
                    />
                  </div>
                  <p className="text-xs text-zinc-400 font-medium group-hover:text-zinc-200 transition">
                    {tech.nama}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-zinc-600/50 my-8 mx-10"></div>
          <div>
            <h3 className="text-zinc-300 font-semibold text-lg mb-6 text-center border-b border-zinc-600 pb-2 w-fit mx-auto px-4">
              Tools
            </h3>
            <div className="flex flex-wrap gap-8 justify-center">
              {listTools.map((tool) => (
                <div key={tool.id} className="group flex flex-col items-center gap-3 w-20">
                  <div className="p-3 bg-zinc-700/50 rounded-lg group-hover:bg-zinc-700 transition duration-300">
                    <img
                      src={tool.gambar}
                      alt={tool.nama}
                      className="w-10 h-10 object-contain opacity-75 group-hover:opacity-100 transition duration-300"/>
                  </div>
                  <p className="text-xs text-zinc-400 font-medium group-hover:text-zinc-200 transition">
                    {tool.nama}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="sertifikat" className="sertifikat py-10 px-4">
        <div className="w-full max-w-6xl max-auto p-8 bg-zinc-800 rounded-xl shadow-lg border-zinc-700/50 relative">
          <h3 className="text-zinc-300 font-semibold text-lg mb-8 text-center border-b border-zinc-600 pb-2 w-fit mx-auto px-4">
            Sertifikat & Lisensi
          </h3>
          <div className="relative group/slider">
            <button 
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 p-2 bg-zinc-900/80 rounded-full text-white hover:bg-violet-500 transition shadow-lg opacity-0 group-hover/slider:opacity-100">
              <i className="ri-arrow-left-s-line ri-xl"></i>
            </button>
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide snap-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {listCert.map((cert) => (
                <div 
                  key={cert.id} 
                  onClick={() => setSelectedCert(cert)}
                  className="flex-none snap-center w-full md:w-[calc(33.333%-16px)] group relative bg-zinc-700/30 rounded-xl overflow-hidden hover:bg-zinc-700/50 transition duration-300 border border-zinc-700/50 hover:border-zinc-500 cursor-pointer">
                  <div className="aspect-video w-full overflow-hidden bg-zinc-900">
                      <img
                        src={cert.gambar}
                        alt={cert.nama}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"/>
                  </div>
                  <div className="p-5">
                    <h4 className="text-zinc-200 font-medium text-base mb-2 line-clamp-2" title={cert.nama}>
                      {cert.nama}
                    </h4>
                    <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition">
                        {cert.keterangan || "Lihat Kredensial"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 p-2 bg-zinc-900/80 rounded-full text-white hover:bg-violet-500 transition shadow-lg opacity-0 group-hover/slider:opacity-100">
              <i className="ri-arrow-right-s-line ri-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="kontak" className="kontak mt-32 p-10">
        <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">Mari terhubung dengan saya.</p>
        <form action="https://formsubmit.co/rafiody16@gmail.com" method="POST" className="bg-zinc-800 p-10 w-fit mx-auto rounded-md" autoComplete="off">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama" className="border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email" className="border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="pesan">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" className="border-zinc-500 p-2 rounded-md" placeholder="Masukkan Pesan"></textarea>
            </div>
            <div className="w-full">
              <button type="submit" className="w-full bg-violet-500 p-4 rounded-2xl cursor-pointer hover:bg-violet-300 font-bold">Kirim Pesan</button>
            </div>
            <div className="flex gap-2">
              <a href="https://github.com/rafiody16">
                  <i className="ri-github-fill ri-zx"></i>
              </a>
              <a href="https://www.linkedin.com/in/rafi-ody-prasetyo-5a00621a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  <i className="ri-linkedin-fill ri-zx"></i>
              </a>
              <a href="https://www.instagram.com/ody.166/">
                  <i className="ri-instagram-fill ri-zx"></i>
              </a>
            </div>
          </div>
        </form>
      </div>

      <CertificateModal 
        cert={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />
    </>
  )
}

export default App