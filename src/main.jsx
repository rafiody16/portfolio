import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import { HashRouter } from "react-router-dom"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter> 
      <div className="container mx-auto px-4">
        <Navbar />
        <App />
      </div>
    </HashRouter>
  </StrictMode>
);
