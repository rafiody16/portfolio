import {useState, useEffect} from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setActive(true);
            } else {
                setActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
     <div
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-10 flex items-center justify-between
      ${active ? "bg-zinc-900/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-7"}`}
     >
      
      {/* Container agar logo & menu sejajar dengan konten website */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        
        <div className="logo">
          <h1 className="text-2xl md:text-3xl font-bold text-white cursor-pointer">
            Portfolio
          </h1>
        </div>

        <ul className="flex items-center sm:gap-10 gap-6">
          <li>
            <a href="#" className="text-white sm:text-lg text-base font-medium hover:text-violet-400 transition">
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="text-white sm:text-lg text-base font-medium hover:text-violet-400 transition">
              Tentang
            </a>
          </li>
          <li>
            <a href="#" className="text-white sm:text-lg text-base font-medium hover:text-violet-400 transition">
              Sertifikat
            </a>
          </li>
          <li>
            <a href="#" className="text-white sm:text-lg text-base font-medium hover:text-violet-400 transition">
              Kontak
            </a>
          </li>
        </ul>

      </div>
    </div> 
    )
}

export default Navbar;
