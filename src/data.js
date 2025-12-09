import HeroImage from "/assets/fotoku.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/laravel.png";
import Tools13 from "/assets/tools/mssql.png";
import Tools14 from "/assets/tools/mysql.png";
import Tools15 from "/assets/tools/php.png";
import Tools16 from "/assets/tools/py.png";
import Tools17 from "/assets/tools/colab.png";
import Tools18 from "/assets/tools/java.png";

import cert1 from "/assets/cert/mta-js.png";
import cert2 from "/assets/cert/mta-db.png";
import cert3 from "/assets/cert/ukk.png";
import cert4 from "/assets/cert/vsga.png";

export const listCert = [
  {
    id: 1,
    nama: "VSGA: Junior Web Developer",
    ket: "Komdigi",
    tahun: "Juni 2025",
    unique: "93106181160-31/VSGA/BLSDM.Komdigi/2025",
    gambar: "/assets/cert/vsga.png"
  },
  {
    id: 2,
    nama: "UKK Assesment: Laravel & Vue",
    ket: "DOT Indonesia",
    tahun: "April 2022",
    unique: "UKK.28.314",
    gambar: "/assets/cert/ukk.png"
  },
  {
    id: 3,
    nama: "MTA: Database Administrator Fundamentals",
    ket: "Microsoft",
    tahun: "Desember 2021",
    unqiue: "REnn-FVpT",
    gambar: "/assets/cert/mta-db.png"
  },
  {
    id: 4,
    nama: "MTA: Introduction to Programming Using Javascript",
    ket: "Microsoft",
    tahun: "April 2021",
    unqiue: "LNK7-sFcm",
    gambar: "/assets/cert/mta-js.png"
  }
]

export const techStack = [
  {
    id: 1,
    gambar: Tools15,
    nama: "PHP",
    ket: "Language",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools12,
    nama: "Laravel",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools13,
    nama: "Microsoft SQL Server",
    ket: "Database",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools14,
    nama: "MySQL",
    ket: "Database",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools4,
    nama: "Tailwind",
    ket: "Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools16,
    nama: "Python",
    ket: "Language",
    dad: "800", 
  },
  {
    id: 9,
    gambar: Tools18,
    nama: "Java",
    ket: "Language",
    dad: "900", 
  }
]

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 3,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 4,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 5,
    gambar: Tools17,
    nama: "Google Colab",
    ket: "Design App",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Sekolah",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Company Profile",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Pernikahan 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Course",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
  },
];
