import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1767785445908-e557ce09a0ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxsYXR0ZSUyMGFydCUyMGNvZmZlZSUyMGN1cCUyMG9uJTIwd29vZGVuJTIwdGFibGUlMjB3YXJtJTIwY296eXxlbnwwfHx8fDE3NzE2MDU0MjZ8MA&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/90 via-[#3E2723]/50 to-transparent" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://customer-assets.emergentagent.com/job_3303db78-9645-43ed-8e8f-459392dae8f1/artifacts/vwd9ucwz_WhatsApp%20Image%202026-02-20%20at%2017.10.24.jpeg"
              alt="Itihaasa Foods"
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-full bg-[#FFF8E1]/20 backdrop-blur-sm p-4"
              data-testid="hero-logo-main"
            />
          </div>

          {/* Sub-brands */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://customer-assets.emergentagent.com/job_3303db78-9645-43ed-8e8f-459392dae8f1/artifacts/wj1wn726_WhatsApp%20Image%202026-02-20%20at%2017.02.51.jpeg"
              alt="Fresh Bean"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full bg-[#FFF8E1]/20 backdrop-blur-sm p-2"
              data-testid="hero-logo-freshbean"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://customer-assets.emergentagent.com/job_3303db78-9645-43ed-8e8f-459392dae8f1/artifacts/nqxed4lh_WhatsApp%20Image%202026-02-20%20at%2017.02.54.jpeg"
              alt="Bean & Brew"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full bg-[#FFF8E1]/20 backdrop-blur-sm p-2"
              data-testid="hero-logo-beanbrew"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-[#FFF8E1] leading-tight">
            Where Tradition Meets
            <br />
            <span className="text-[#D7CCC8]">Every Cup</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-[#FFF3E0] font-['Lato'] max-w-2xl mx-auto leading-relaxed">
            Experience the finest blend of heritage and flavor at Itihaasa Foods, featuring Fresh Bean and Bean & Brew
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToMenu}
            className="inline-flex items-center px-8 py-4 bg-[#3E2723] text-[#FFF8E1] rounded-full font-['Lato'] font-bold text-lg shadow-xl hover:bg-[#5D4037] transition-all duration-300"
            data-testid="hero-view-menu-button"
          >
            View Menu
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-[#FFF8E1]" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;