// src/pages/Contact.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-yellow-300 text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeVariant}
      >
        Contact Us
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={fadeVariant}
        >
          <div className="bg-gray-900 p-6 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4 text-lg text-gray-300">
              <p className="flex items-center gap-3"><Phone className="text-yellow-300" size={20} /> +91 7353737793</p>
              <p className="flex items-center gap-3"><Mail className="text-yellow-300" size={20} /> signgalaxy.in</p>
              <p className="flex items-start gap-3"><MapPin className="text-yellow-300" size={20} /> Ballari, Karnataka, India</p>
              <p className="flex items-center gap-3"><Clock className="text-yellow-300" size={20} /> Mon - Sat: 9:00 AM – 7:00 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Google Maps */}
        <motion.div
          className="w-full h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-300"
          initial="hidden"
          animate="visible"
          variants={fadeVariant}
        >
          <iframe
  className="rounded-xl shadow-xl w-full h-64 md:h-80"
  src="https://maps.google.com/maps?q=Kumar%20Swamy%20Temple%20Indira%20Nagar%20Ballari%20Karnataka%20583101&output=embed"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Sign Galaxy Location"
/>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
