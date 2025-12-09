import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-2">
        <div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Rafi Ody Prasetyo</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Perkenalkan, nama saya Rafi Ody Prasetyo. Sebagai mahasiswa Teknologi Informasi di Politeknik Negeri Malang. Saya memiliki minat spesifik dalam pengembangan perangkat lunak, teknologi web, dan rekayasa data. Melalui berbagai proyek yang saya kerjakan, saya terus mengasah kemampuan problem-solving dan teknis saya. Tujuan saya sederhana: tumbuh menjadi developer yang serba bisa dan siap berkontribusi dalam industri teknologi.
          </p>
          <div>
            <a href="#" className="bg-violet-500 p-4 rounded-2xl hover:bg-violet-300">
              Download CV
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="" className="w-[400px] h-[500px] rounded-2xl ml-auto" />
      </div>
    </>
  )
}

export default App
