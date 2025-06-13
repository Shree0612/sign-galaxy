// src/pages/Contact.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

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
            title="Sign Galaxy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15569.370215063997!2d76.9007015!3d15.139393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3c6b72694dd67%3A0x6ea76f4006e49d56!2sBallari%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1718181335647!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
