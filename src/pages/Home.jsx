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
      <p>Welcome to my personal website! Here I showcase my current projects and developments.</p>
      
      {/* Add your projects here */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Current Projects</h2>
        <ul>
          <li>ReCap - your all-in-one corporate meeting assistant</li>
          <li>Project 2 - Description</li>
          <li>Project 3 - Description</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Home;