import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FaInstagram } from 'react-icons/fa';

import ServicesMain from './services/ServicesMain.jsx';
import Interior from './services/Interior.jsx';
import Exterior from './services/Exterior.jsx';
import Signage from './services/Signage.jsx';

const images = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Router>
      <div className="relative w-full text-white scroll-smooth">

        {/* Background Slideshow */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`fixed top-0 left-0 h-screen w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              current === index ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-30 z-10" />

        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-30 backdrop-blur-sm">
          <nav className="flex justify-between items-center px-6 py-4">
            <img
              src="/images/logo1.png"
              alt="Sign Galaxy Logo"
              className="h-16 w-auto object-contain"
            />
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none text-2xl">
                ☰
              </button>
            </div>
            <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 text-lg font-medium absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent px-6 py-4 md:p-0 transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'}`}>
<a href="#home" className="hover:text-yellow-300 transition">Home</a>
<a href="#about" className="hover:text-yellow-300 transition">About Us</a>
              <a href="/#services" className="hover:text-yellow-300 transition">Services</a>
  <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <main className="relative z-30 pt-28">
          <Routes>
            <Route path="/" element={
              <>
                {/* Hero Section */}
                <section id="home" className="flex items-center justify-center h-screen px-6 text-center">
                  <div className="-translate-y-10">
                    <h2 className="text-5xl md:text-6xl font-bold drop-shadow-md">
                      Elevate Spaces with Sign Galaxy
                    </h2>
                    <p className="mt-4 text-xl text-gray-100">
                      Crafting bold impressions through signs, interiors, and exteriors.
                    </p>
                  </div>
                </section>

                {/* About Us Section */}
                <motion.section
                  id="about"
                  className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 text-white scroll-mt-28"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 text-yellow-300">About Us</h2>
                    <p className="text-lg leading-8 mb-8">
                      At <span className="font-semibold text-white">Sign Galaxy</span>, we specialize in transforming ordinary spaces into extraordinary expressions.
                      With over 6 years of expertise in <span className="text-yellow-300">interior</span>, <span className="text-yellow-300">exterior</span>, and <span className="text-yellow-300">signage</span> design, we craft experiences that speak louder than words.
                    </p>
                    <p className="text-lg leading-8 mb-8">
                      Emerging from the heart of Ballari, our young founder has become a beacon of inspiration in the design industry. With an unwavering commitment to enhancing the aesthetics of spaces, we’ve revolutionized the local design landscape — blending innovation with elegance.
                    </p>
                    <p className="text-lg leading-8 mb-8">
                      With an innovative approach and an eye for detail, we’ve earned recognition for our exceptional work, leaving an indelible mark on interiors, exteriors, and branding environments alike.
                    </p>
                  </div>
                </motion.section>

                {/* Clients Section */}
                <motion.section
                  id="clients"
                  className="bg-black py-16 text-white"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <h2 className="text-3xl font-bold text-center text-yellow-300 mb-8">
                    Our Esteemed Clients
                  </h2>
                  <div className="overflow-hidden">
                    <div className="flex space-x-12 animate-scroll px-6">
                      {[
                        "work1.jpg",
                        "work2.jpg",
                        "work3.jpg",
                        "work4.jpg",
                        "work5.png",
                        "work6.jpeg",
                        "work7.jpg"
                      ].map((img, index) => (
                        <img
                          key={index}
                          src={`/images/${img}`}
                          alt={`Client ${index + 1}`}
                          className="h-24 object-contain opacity-80 hover:opacity-100 transition duration-300"
                        />
                      ))}
                      <span className="text-xl text-gray-400 whitespace-nowrap pt-6">...and many more</span>
                    </div>
                  </div>
                </motion.section>

                {/* Founder Section */}
                <motion.section
                  id="founder"
                  className="bg-black py-20 px-6 text-white scroll-mt-28"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 text-yellow-300">Meet the Founder</h2>
                    <p className="text-lg leading-8 mb-8">
                      The driving force behind Sign Galaxy is our passionate founder — a young visionary from Ballari with a mission to transform spaces into meaningful, inspiring environments.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
                      <img
                        src="/images/founder.jpg"
                        alt="Founder of Sign Galaxy"
                        className="w-64 h-64 rounded-full shadow-lg object-cover border-4 border-yellow-300"
                      />
                      <div className="text-left max-w-md">
                        <h3 className="text-2xl font-semibold text-white mb-2">Sudheer Chowdary</h3>
                        <p className="text-lg text-gray-300">
                          With a relentless commitment to quality and detail, our founder leads every project with creativity and innovation. His vision has helped Sign Galaxy become a leading design name in Ballari and beyond.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Services Section */}
                <motion.section
                  id="services"
                  className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 text-white scroll-mt-28"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10 text-yellow-300">Our Services</h2>

                    <div className="grid md:grid-cols-3 gap-10">
                      <Link to="/services/interior" className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 group">
                        <img
                          src="/images/mainimages/interiormain.jpg"
                          alt="Interior Design"
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4 text-black">
                          <h3 className="text-xl font-bold mb-2">Interior</h3>
                          <p className="mb-4">Elegant designs for your indoor spaces.</p>
                          <span className="text-blue-500 font-medium hover:underline">Learn More</span>
                        </div>
                      </Link>

                      <Link to="/services/exterior" className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 group">
                        <img
                          src="/images/mainimages/exteriormain.jpg"
                          alt="Exterior Design"
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4 text-black">
                          <h3 className="text-xl font-bold mb-2">Exterior Design</h3>
                          <p className="mb-4">Elevating building facades and outdoor spaces with elegance and precision.</p>
                          <span className="text-blue-500 font-medium hover:underline">Learn More</span>
                        </div>
                      </Link>

                      <Link to="/services/signage" className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 group">
                        <img
                          src="/images/mainimages/signagemain.jpg"
                          alt="Signage Solutions"
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4 text-black">
                          <h3 className="text-xl font-bold mb-2">Signage Solutions</h3>
                          <p className="mb-4">Crafting bold signage to capture attention and reinforce your brand.</p>
                          <span className="text-blue-500 font-medium hover:underline">Learn More</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.section>

                {/* Contact Section */}
                <motion.section
                  id="contact"
                  
                  className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 text-white scroll-mt-28"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-yellow-300 mb-10">Contact Us</h2>
                    <p className="text-lg mb-6">We'd love to hear from you! Get in touch via call or visit us directly.</p>
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                      <div className="space-y-4 text-left">
                        <p><span className="text-yellow-300 font-semibold">Phone:</span> <a href="tel:+91 7353737793" className="hover:underline">+91 7353737793</a></p>
                        <p><span className="text-yellow-300 font-semibold">Email:</span> <a href="mailto:info@singalaxy.in" className="hover:underline">contact@signgalaxy.in</a></p>
                        <p><span className="text-yellow-300 font-semibold">Location:</span> Ballari, Karnataka, India</p>
                      </div>
                      <iframe
                        className="rounded-xl shadow-xl w-full h-64 md:h-80"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.536017921994!2d76.93364771482206!3d14.64720377977996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8f72403a67f37%3A0x9e70f7928c645fe7!2sBallari%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1718263080000!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sign Galaxy Location"
                      />
                    </div>
                  </div>
                  <div className="mt-10 flex justify-center">
  <a
    href="https://www.instagram.com/sign_galaxy_/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-white bg-opacity-10 hover:bg-yellow-300 transition-all duration-300 px-5 py-3 rounded-full"
  >
    <FaInstagram className="text-pink-500 text-2xl" />
    <span className="text-white font-medium">Follow us on Instagram</span>
  </a>
</div>

                </motion.section>
              </>
            } />

            {/* Services Routes */}
            <Route path="/services" element={<ServicesMain />} />
            <Route path="/services/interior" element={<Interior />} />
            <Route path="/services/exterior" element={<Exterior />} />
            <Route path="/services/signage" element={<Signage />} />
          </Routes>
        </main>
      </div>
      
      <InstagramIcon />
      <footer className="bg-black bg-opacity-70 text-white py-6 px-4 text-center z-50 relative">
  <img
    src="/images/logo1.png"
    alt="Sign Galaxy Logo"
    className="mx-auto h-12 mb-3"
  />
  <p className="text-sm">&copy; {new Date().getFullYear()} Sign Galaxy. All rights reserved.</p>
  <p className="text-sm">Crafted with ❤️ in Ballari</p>
</footer>

    </Router>
  );
}

const InstagramIcon = () => {
  <div className="bg-black py-10 px-6 text-center">
  <h3 className="text-white text-xl md:text-2xl font-semibold">
    All Your Branding Needs Under One Roof – <span className="text-yellow-400">Sign Galaxy</span>
  </h3>
</div>

};

export default App;
