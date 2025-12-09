import DataImage, { listTools, techStack } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-32 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Rafi Ody Prasetyo</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Perkenalkan, nama saya Rafi Ody Prasetyo. Sebagai mahasiswa Teknologi Informasi di Politeknik Negeri Malang. Saya memiliki minat spesifik dalam pengembangan perangkat lunak, teknologi web, dan rekayasa data. Melalui berbagai proyek yang saya kerjakan, saya terus mengasah kemampuan problem-solving dan teknis saya. Tujuan saya sederhana: tumbuh menjadi developer yang serba bisa dan siap berkontribusi dalam industri teknologi.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-500 p-4 rounded-2xl hover:bg-violet-300">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="" className="w-[420px] h-[500px] rounded-2xl md:ml-auto" />
      </div>

      <div className="tentang mt-32 py-10 px-4">
        <div className="w-full max-w-6xl max-auto p-8 bg-zinc-800 rounded-xl shadow-lg border-zinc-700/50">

          {/* --- Bagian Tech Stack --- */}
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
            
          {/* --- Divider (Garis Pemisah) --- */}
          <div className="border-t border-zinc-600/50 my-8 mx-10"></div>
            
          {/* --- Bagian Tools --- */}
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
                      className="w-10 h-10 object-contain opacity-75 group-hover:opacity-100 transition duration-300"
                    />
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

    
    </>
  )
}

export default App
