// src/components/navbar/Navbar.jsx
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Mobile toggle button */}
      <div className="mobileMenu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          Sulaksha B K's Portfolio
        </motion.span>

<div className="navLinks">
  <a href="#Homepage">Me</a>
  <a href="#Services">What I Do</a>
  <a href="#Portfolio">What I Did</a>
  <a href="#Achievements">What I Won</a>
  <a href="#Contact">Connect</a>
</div>

      </div>

      {/* Sidebar (controlled only by Navbar state) */}
      <Sidebar open={menuOpen} setOpen={setMenuOpen} />
    </div>
  );
};

export default Navbar;
