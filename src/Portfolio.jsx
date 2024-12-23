import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './fonts.css';

// Modal Component
const Modal = ({ image, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
  >
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ type: "spring", damping: 20 }}
      onClick={e => e.stopPropagation()}
      className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden"
    >
      <div className="absolute top-4 right-4 z-10">
        <button 
          onClick={onClose}
          className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      
      <div className="max-h-[70vh]">
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2">{image.title}</h2>
        <p className="text-gray-600 text-sm md:text-base">{image.description}</p>
      </div>
    </motion.div>
  </motion.div>
);

// About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-24 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute top-20 left-32 w-8 md:w-12 h-8 md:h-12 bg-green-400 rotate-45"
      />
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute top-40 right-20 w-6 md:w-8 h-6 md:h-8 bg-pink-400"
      />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
        {/* Left Column */}
        <div className="relative">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/jasper-portfolio/assets/meow.png"
              alt="Character Illustration"
              className="relative z-10 rounded-2xl w-full"
            />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-8 md:space-y-12 relative">
          {/* About Me Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-cyan-300 rounded-lg p-4 md:p-6 text-cyan-950"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ABOUT ME</h2>
            <p className="text-sm md:text-base">
              I'm Jasper Smith, a Visual Artist and Illustrator based in California. 
              I specialize in creating vibrant digital illustrations and character designs. 
              I'm passionate about bringing stories to life through art and am always 
              eager to take on new creative challenges.
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-pink-400 mb-4">EDUCATION</h2>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-pink-400" />
              <span className="text-sm md:text-base">Freshman at Capuchino High School</span>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-pink-400 mb-4">EXPERIENCE</h2>
            <div className="ml-4 border-l-2 border-pink-400 pl-4">
              <div className="mb-4">
                <h3 className="font-medium text-sm md:text-base">2019-Present: Fine arts and Illustration</h3>
                <p className="text-gray-600 text-sm md:text-base">Creating custom illustrations and character designs</p>
              </div>
            </div>
          </motion.div>

          {/* Skills and Language Section */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {/* Software Skills */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-pink-400 mb-4">SPECIALIZATIONS</h2>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li>Digital Art</li>
                <li>Illustrations</li>
                <li>Painting</li>
                <li>Sketching</li>
              </ul>
            </motion.div>

            {/* Language */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-pink-400 mb-4">LANGUAGE</h2>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li>English (Native)</li>
                <li>Spanish (Conversational)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Traditional Art Page Component
const TraditionalArtPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { 
      id: 5, 
      src: '/jasper-portfolio/assets/sketch.png',
      title: 'Character Portrait',
      description: 'Traditional-style portrait with a modern digital twist.'
    },
    { 
      id: 9, 
      src: '/jasper-portfolio/assets/gojo.png',
      title: 'Jump Animation',
      description: 'Dynamic pose study focusing on movement and energy in illustration.'
    },
    { 
      id: 10, 
      src: '/jasper-portfolio/assets/castiel.png',
      title: 'Animation Frame',
      description: 'Part of a series exploring movement and character expression.'
    },
    { 
      id: 11, 
      src: '/jasper-portfolio/assets/curlyguy.png',
      title: 'Character Portrait',
      description: 'Traditional-style portrait with a modern digital twist.'
    },
    { 
      id: 12, 
      src: '/jasper-portfolio/assets/gojo2.png',
      title: 'Wildlife Study',
      description: 'Detailed wildlife illustration focusing on texture and form.'
    },
    { 
      id: 17, 
      src: '/jasper-portfolio/assets/squatty.png',
      title: 'Animation Frame',
      description: 'Part of a series exploring movement and character expression.'
    },
    { 
      id: 19, 
      src: '/jasper-portfolio/assets/kiyoshi.png',
      title: 'Animation Frame',
      description: 'Part of a series exploring movement and character expression.'
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white pt-20 md:pt-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl mb-8 md:mb-16 font-bold">
            Black & White
          </h1>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-8">
            {images.map((image) => (
              <motion.div
                key={image.id}
                className="mb-4 md:mb-8 break-inside-avoid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: image.id * 0.1 }}
              >
                <div 
                  className="relative group cursor-pointer rounded-lg overflow-hidden"
                  onClick={() => setSelectedImage(image)}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "tween", duration: 0.2 }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full rounded-lg"
                    />
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex flex-col items-center justify-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-base md:text-lg">
                      {image.title}
                    </p>
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs md:text-sm mt-2 px-4 text-center">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Modal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};
// Digital Art Page Component
const DigitalArtPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { 
      id: 1, 
      src: '/jasper-portfolio/assets/cassian.png',
      title: 'Fox Portrait',
      description: 'A detailed digital painting exploring light and shadow through a monochromatic palette.'
    },
    { 
      id: 2, 
      src: '/jasper-portfolio/assets/jasper-sketch.png',
      title: 'Character Study',
      description: 'Quick character sketch exploring personality through minimal line work.'
    },
    { 
      id: 3, 
      src: '/jasper-portfolio/assets/jaspy.png',
      title: 'Jump Animation',
      description: 'Dynamic pose study focusing on movement and energy in illustration.'
    },
    { 
      id: 4, 
      src: '/jasper-portfolio/assets/deanie-weanie.png',
      title: 'Animation Frame',
      description: 'Part of a series exploring movement and character expression.'
    },
    { 
      id: 6, 
      src: '/jasper-portfolio/assets/spidey.png',
      title: 'Wildlife Study',
      description: 'Detailed wildlife illustration focusing on texture and form.'
    },
    { 
      id: 7, 
      src: '/jasper-portfolio/assets/klaus.png',
      title: 'Fox Portrait',
      description: 'A detailed digital painting exploring light and shadow through a monochromatic palette.'
    },
    { 
      id: 8, 
      src: '/jasper-portfolio/assets/spidey2.png',
      title: 'Character Study',
      description: 'Quick character sketch exploring personality through minimal line work.'
    },
    { 
      id: 13, 
      src: '/jasper-portfolio/assets/guy.png',
      title: 'Wildlife Study',
      description: 'Detailed wildlife illustration focusing on texture and form.'
    },
    { 
      id: 14, 
      src: '/jasper-portfolio/assets/eye.png',
      title: 'Fox Portrait',
      description: 'A detailed digital painting exploring light and shadow through a monochromatic palette.'
    },
    { 
      id: 15, 
      src: '/jasper-portfolio/assets/miguel.png',
      title: 'Character Study',
      description: 'Quick character sketch exploring personality through minimal line work.'
    },
    { 
      id: 16, 
      src: '/jasper-portfolio/assets/5.png',
      title: 'Jump Animation',
      description: 'Dynamic pose study focusing on movement and energy in illustration.'
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white pt-20 md:pt-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl mb-8 md:mb-16 font-bold">
             Color
          </h1>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-8">
            {images.map((image) => (
              <motion.div
                key={image.id}
                className="mb-4 md:mb-8 break-inside-avoid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: image.id * 0.1 }}
              >
                <div 
                  className="relative group cursor-pointer rounded-lg overflow-hidden"
                  onClick={() => setSelectedImage(image)}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "tween", duration: 0.2 }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full rounded-lg"
                    />
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex flex-col items-center justify-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-base md:text-lg">
                      {image.title}
                    </p>
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs md:text-sm mt-2 px-4 text-center">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Modal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

// Home Page Component
const HomePage = ({ setCurrentPage }) => (
  <main className="pt-20 md:pt-28 relative min-h-screen">
    <div className="relative z-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <h1 className="text-4xl md:text-9xl text-black leading-none" style={{ fontFamily: 'Billo Dream' }}>
            Hello, I'm Jasper <span className="block md:inline md:ml-[50px]">Smith</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-gray-100 rounded-lg border-4 border-emerald-950 z-10 shadow-xl drop-shadow-xl origin-left rotate-12">
            <div className="absolute top left z-30">
              <button className="w-8 md:w-10 h-8 md:h-10 bg-white squared-full flex items-center justify-center border-r-4 border-b-4 border-black top-10">
                <X size={16} strokeWidth={3} />
              </button>
            </div>

            <div className="h-8 md:h-10 bg-pink-400 border-b-4 border-b-black" />

            <div className="overflow-hidden">
              <img
                src="/jasper-portfolio/assets/jaspy.png"
                alt="Profile"
                className="w-full h-[300px] md:h-[600px] object-cover"
              />
            </div>

            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute top-24 md:top-48 -right-6 md:-right-10 z-20"
            >
              <div className="bg-black text-white px-6 md:px-10 py-2 rounded-full flex items-center gap-2 text-sm md:text-base">
                <button className="w-4 md:w-5 h-4 md:h-5 bg-pink-400 rounded-full flex items-center justify-center">
                  <X size={12} strokeWidth={3} />
                </button>
                Illustrator
                <button className="w-4 md:w-5 h-4 md:h-5 bg-pink-400 rounded-full flex items-center justify-center">
                  <X size={12} strokeWidth={3} />
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="absolute -left-20 md:-left-36 bottom-0 z-20"
          >
            <div className="flex flex-wrap gap-2 w-40 md:w-56">
              {[...Array(10)].map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
                  className="w-8 md:w-12 h-8 md:h-12 bg-pink-400 border-2 border-black"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>

    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute bottom-0 left-0 right-0 w-full bg-cyan-300 h-[35vh] md:h-[44vh] rounded-t-[2rem] md:rounded-t-[3rem] z-0"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 pt-8 md:pt-16"
          >
            <p className="text-cyan-950 text-base md:text-lg max-w-md mb-6 md:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam.
            </p>

            <div className="flex items-center gap-4 md:gap-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={() => setCurrentPage('digital-art')}  
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-pink-400 text-black px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-pink-600 transition-colors border-2 border-black text-sm md:text-base"
              >
                My Portfolio
                <ArrowUpRight size={16} />
              </motion.button>
              
              <motion.svg 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="w-32 md:w-48 h-6 md:h-8 text-black" 
                viewBox="0 0 120 24"
              >
                <path 
                  d="M0 12 L110 12 M100 2 L110 12 L100 22" 
                  stroke="currentColor" 
                  strokeWidth="6" 
                  fill="none"
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </main>
);
// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-white z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">
            JS
          </div>
          <span className="text-gray-800">Jasper Smith</span>
        </motion.div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden md:flex items-center space-x-8 text-gray-600"
        >
          <button 
            onClick={() => setCurrentPage('home')} 
            className={`hover:text-gray-900 ${currentPage === 'home' ? 'text-gray-900' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('about')} 
            className={`hover:text-gray-900 ${currentPage === 'about' ? 'text-gray-900' : ''}`}
          >
            About Me
          </button>
          <button 
            onClick={() => setCurrentPage('digital-art')} 
            className={`hover:text-gray-900 ${currentPage === 'digital-art' ? 'text-gray-900' : ''}`}
          >
            Color
          </button>
          <button 
            onClick={() => setCurrentPage('traditional-art')} 
            className={`hover:text-gray-900 ${currentPage === 'traditional-art' ? 'text-gray-900' : ''}`}
          >
            Black & White
          </button>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute left-0 right-0 bg-white px-4 py-4 shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 ${currentPage === 'home' ? 'text-gray-900' : 'text-gray-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('about');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 ${currentPage === 'about' ? 'text-gray-900' : 'text-gray-600'}`}
              >
                About Me
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('digital-art');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 ${currentPage === 'digital-art' ? 'text-gray-900' : 'text-gray-600'}`}
              >
                Color
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('traditional-art');
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 ${currentPage === 'traditional-art' ? 'text-gray-900' : 'text-gray-600'}`}
              >
                Black & White
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname.substring(1);
    const pathToPage = {
      '': 'home',
      'about': 'about',
      'color': 'digital-art',
      'black-and-white': 'traditional-art'
    };
    return pathToPage[path] || 'home';
  });

  const handlePageChange = (page) => {
    const pageToPath = {
      'home': '/',
      'about': '/about',
      'digital-art': '/color',
      'traditional-art': '/black-and-white'
    };
    window.history.pushState({}, '', pageToPath[page]);
    setCurrentPage(page);
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1);
      const pathToPage = {
        '': 'home',
        'about': 'about',
        'color': 'digital-art',
        'black-and-white': 'traditional-art'
      };
      setCurrentPage(pathToPage[path] || 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={handlePageChange} />
      {currentPage === 'home' && <HomePage setCurrentPage={handlePageChange} />}
      {currentPage === 'digital-art' && <DigitalArtPage />}
      {currentPage === 'traditional-art' && <TraditionalArtPage />}
      {currentPage === 'about' && <AboutPage />}
    </div>
  );
};

export default Portfolio;