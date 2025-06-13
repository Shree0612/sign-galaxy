// ServicesMain.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    name: 'Interior Design',
    image: '/images/mainimages/interiormain.jpg',
    link: '/services/interior',
    desc: 'Stylish and smart interiors that reflect personality and purpose.',
  },
  {
    name: 'Exterior Design',
    image: '/images/mainimages/exteriormain.jpg',
    link: '/services/exterior',
    desc: 'Bold and elegant exteriors that make a powerful first impression.',
  },
  {
    name: 'Signage Solutions',
    image: '/images/mainimages/signagemain.jpg',
    link: '/services/signage',
    desc: 'Custom signage crafted to amplify your brand visibility and identity.',
  },
];


const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ServicesMain = () => {
  return (
    <motion.div
      className="min-h-screen bg-black text-white px-6 pt-36 pb-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-yellow-300"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h2>
      <motion.div
        className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-yellow-300 hover:border-white transition-all"
          >
            <Link to={service.link} className="block">
              <img
                src={service.image}
                alt={service.name}
                className="h-60 w-full object-cover hover:opacity-90 transition-opacity duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">{service.name}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServicesMain;
