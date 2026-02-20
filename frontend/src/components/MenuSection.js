import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuItems } from '../data/menuData';
import { X } from 'lucide-react';

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('coffee');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  const formatPrice = (priceObj) => {
    if (priceObj.small) {
      return `₹${priceObj.small} / ₹${priceObj.large}`;
    }
    return `₹${priceObj.regular}`;
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FFF8E1] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-bold text-[#3E2723] mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-[#5D4037] font-['Lato']">
            Explore our carefully curated selection
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 sm:gap-4 pb-4 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-['Lato'] font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-[#3E2723] text-[#FFF8E1] shadow-lg'
                    : 'bg-white text-[#3E2723] hover:bg-[#D7CCC8]'
                }`}
                data-testid={`category-${category.id}`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(62, 39, 35, 0.15)' }}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-xl p-6 cursor-pointer transition-all duration-300"
                style={{ boxShadow: '0 4px 20px -2px rgba(62, 39, 35, 0.1)' }}
                data-testid={`menu-item-${item.id}`}
              >
                <h3 className="text-xl font-['Playfair_Display'] font-bold text-[#3E2723] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#5D4037] font-['Lato'] mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-['Lato'] font-bold text-[#3E2723]">
                    {formatPrice(item.price)}
                  </span>
                  <span className="text-xs text-[#BCAAA4] font-['Lato']">
                    Tap for details
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
            data-testid="menu-item-modal"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-lg w-full relative"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-[#3E2723] hover:text-[#5D4037]"
                data-testid="modal-close-button"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-['Playfair_Display'] font-bold text-[#3E2723] mb-4">
                {selectedItem.name}
              </h2>
              <p className="text-base text-[#5D4037] font-['Lato'] mb-6">
                {selectedItem.description}
              </p>
              <div className="flex items-center justify-between border-t border-[#D7CCC8] pt-4">
                <span className="text-2xl font-['Lato'] font-bold text-[#3E2723]">
                  {formatPrice(selectedItem.price)}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuSection;