import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <nav className="navbar">
      <div className="sidename">
        <a href="#contact">
        ncholasandre
        </a>
      </div>
      
      {/* Desktop Menu */}
      <ul className="nav-links">
 
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>

     
      <div 
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      
      <AnimatePresence>
        {isMenuOpen && (
          <>
            
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            
            <motion.div
              className="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.ul className="mobile-menu-list">
                <motion.li custom={0} variants={linkVariants}>
                  <a href="#home" onClick={closeMenu}>Home</a>
                </motion.li>
                <motion.li custom={1} variants={linkVariants}>
                  <a href="#about" onClick={closeMenu}>About</a>
                </motion.li>
                <motion.li custom={2} variants={linkVariants}>
                  <a href="#education" onClick={closeMenu}>Education</a>
                </motion.li>
                <motion.li custom={3} variants={linkVariants}>
                  <a href="#projects" onClick={closeMenu}>Projects</a>
                </motion.li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;