import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#3E2723] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
            data-testid="nav-logo"
          >
            <span className="text-[#FFF8E1] font-['Playfair_Display'] text-2xl font-bold">
              Itihaasa Foods
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-[#FFF8E1] hover:text-[#D7CCC8] transition-colors duration-300 font-['Lato'] font-medium"
              data-testid="nav-menu-link"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#FFF8E1] hover:text-[#D7CCC8] transition-colors duration-300 font-['Lato'] font-medium"
              data-testid="nav-about-link"
            >
              About
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#FFF8E1]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#3E2723] border-t border-[#5D4037]"
          data-testid="mobile-menu"
        >
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left text-[#FFF8E1] hover:text-[#D7CCC8] py-2 font-['Lato']"
              data-testid="mobile-menu-link"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-[#FFF8E1] hover:text-[#D7CCC8] py-2 font-['Lato']"
              data-testid="mobile-about-link"
            >
              About
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;