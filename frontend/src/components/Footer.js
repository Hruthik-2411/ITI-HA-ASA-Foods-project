import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3E2723] text-[#FFF8E1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="text-[#D7CCC8]" size={28} />
              <h3 className="text-2xl font-['Playfair_Display'] font-bold">
                Itihaasa Foods
              </h3>
            </div>
            <p className="text-[#D7CCC8] font-['Lato'] text-sm">
              Where Tradition Meets Every Cup
            </p>
          </div>

          {/* Sub-brands */}
          <div>
            <h4 className="text-lg font-['Playfair_Display'] font-bold mb-3">
              Our Brands
            </h4>
            <ul className="space-y-2 font-['Lato'] text-sm text-[#D7CCC8]">
              <li>Fresh Bean</li>
              <li>Bean & Brew</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-['Playfair_Display'] font-bold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 font-['Lato'] text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#D7CCC8] hover:text-[#FFF8E1] transition-colors"
                  data-testid="footer-menu-link"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#D7CCC8] hover:text-[#FFF8E1] transition-colors"
                  data-testid="footer-about-link"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-[#5D4037] pt-8 text-center"
        >
          <p className="text-[#D7CCC8] font-['Lato'] text-sm">
            © {new Date().getFullYear()} Itihaasa Foods. Crafted with passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;