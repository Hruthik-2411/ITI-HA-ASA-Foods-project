import React from 'react';
import '@/App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <MenuSection />
      <About />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;