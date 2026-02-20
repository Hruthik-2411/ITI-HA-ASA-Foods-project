import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#F5EFE6] px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#3E2723] mb-6">
            About Itihaasa Foods
          </h2>
          
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg mb-8">
            <p className="text-base sm:text-lg text-[#5D4037] font-['Lato'] leading-relaxed mb-4">
              Itihaasa Foods is where rich culinary heritage meets contemporary cafe culture. Our story begins with a passion for authentic flavors and a commitment to quality that spans generations.
            </p>
            <p className="text-base sm:text-lg text-[#5D4037] font-['Lato'] leading-relaxed">
              Through our brands <strong>Fresh Bean</strong> and <strong>Bean & Brew</strong>, we bring you an exquisite range of coffees, teas, and artisanal food crafted with love and precision. Every cup tells a story, every bite creates a memory.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.pexels.com/photos/34711923/pexels-photo-34711923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Itihaasa Cafe Interior"
              className="w-full h-64 sm:h-80 object-cover"
              data-testid="about-image"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;