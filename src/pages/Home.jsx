import { motion } from 'framer-motion';
import ProjectItem from '../components/ProjectItem';

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
        <ProjectItem 
          title="DexSuite - Dexterous hand control"
          description="Building with Python, Gymnasium, and Genesis. Coming soon"
          link="https://github.com/marcuskam01/"
        />

        <h2>Past Projects</h2>
        <ProjectItem 
          title="StayAwake - Real time drowsiness detector"
          description="A real-time computer vision application that monitors driver alertness using facial landmarks and eye closure detection, alerting drivers to prevent drowsiness-related accidents. Winner of 2022 CodeJam and a qualifier for 2023 Schulich Hacks."
          link="https://github.com/marcuskam01/"
        />
        <ProjectItem 
          title="Capstone - Treatment analytics for McGill University Health Center"
          description="Developed an analytics platform for clinicians to analyze patient-reported treatment outcomes and optimize care plans for sickle cell anemia patients with chronic pain unrelieved by standard medication. Provided data-driven insights to support personalized treatment planning."
          link="https://github.com/marcuskam01/"
        />
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