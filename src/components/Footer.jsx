const Footer = () => {
  return (
    <div className="mt-32 py-4 flex justify-between items-center">
        <h1>Portfolio</h1>
        <div className="flex gap-2">
            <a href="#">Tentang</a>
            <a href="#tentang">Skill</a>
            <a href="#sertifikat">Sertifikat</a>
            <a href="#kontak">Kontak</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/rafiody16">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/rafi-ody-prasetyo-5a00621a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
            <a href="https://www.instagram.com/ody.166/">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer