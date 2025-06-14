import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <h1>What I'm Building</h1>
      <p>Welcome to my personal website! Here I showcase some of my projects and developments. Let me know if you find any of them interesting!</p>
      
      {/* Add your projects here */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Current Projects</h2>
        <ul>
          <li>ReCap - your all-in-one corporate meeting assistant</li>
        </ul>
        <h2>Past Projects</h2>
        <ul>
          <li>StayAwake - Real time drowsiness detector</li>
          <li>Capstone - Treatment analytics for MUHC</li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Reading List</h2>
        <ul>
          <li>The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling</li>
          <li>Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Home;