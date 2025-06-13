// Exterior.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const exteriorCategories = [
  {
    title: 'ACP Cladding',
    folder: 'exacp',
    images: [1, 2, 3, 4],
  },
  {
    title: 'Facade Designs',
    folder: 'exfacade',
    images: [1, 2, 3, 4],
  },
  {
    title: 'HLP Sheets',
    folder: 'exhlp',
    images: [1, 2, 3, 4],
  },
  {
    title: 'PVC Louvers',
    folder: 'expvc',
    images: [1, 2, 3],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeInOut' },
  }),
};

const Exterior = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <div className="bg-black min-h-screen text-white pt-28 pb-16 px-6">

    {/* BACK BUTTON */}
    <button
      onClick={() => window.history.back()}
      className="mb-8 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md shadow-md transition duration-300"
    >
      ← 
    </button>

    <h2 className="text-4xl font-bold text-yellow-300 text-center mb-10">
      Interior Design Works
      </h2>

      {exteriorCategories.map((category, catIndex) => (
        <section key={catIndex} className="mb-20">
          <motion.h3
            className="text-2xl font-semibold mb-8 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {category.title}
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {category.images.map((num, imgIndex) => (
              <motion.div
                key={imgIndex}
                custom={imgIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="overflow-hidden rounded-2xl shadow-2xl bg-gray-900 hover:scale-105 transform transition duration-700"
              >
                <img
                  src={`/images/exterior/${category.folder}${num}.jpg`}
                  alt={`${category.title} ${num}`}
                  className="object-cover h-64 w-full rounded-2xl"
                />
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Exterior;
