import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-2">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="" className="w-10 rounded-md" />
            <q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, deleniti.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Rafi Ody Prasetyo</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci cupiditate aperiam magnam qui amet, porro aliquam. Autem nemo aut similique et officia laborum expedita.
          </p>
          <div>
            <a href="#" className="bg-violet-500 p-4 rounded-2xl hover:bg-violet-300">
              Download CV
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="" className="w-[500px] ml-auto" />
      </div>
    </>
  )
}

export default App
