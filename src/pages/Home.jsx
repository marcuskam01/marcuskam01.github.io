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
          title="ReCap - your all-in-one corporate meeting assistant"
          description="An AI-powered meeting assistant that helps you capture, summarize, and organize key points from your corporate meetings. Built with cutting-edge natural language processing technology."
          link="https://github.com/marcuskam01/recap"
        />

        <h2>Past Projects</h2>
        <ProjectItem 
          title="StayAwake - Real time drowsiness detector"
          description="A computer vision application that monitors driver alertness in real-time using facial feature detection and machine learning algorithms to prevent accidents caused by drowsy driving."
          link="https://github.com/marcuskam01/stayawake"
        />
        <ProjectItem 
          title="Capstone - Treatment analytics for MUHC"
          description="Developed a comprehensive analytics platform for the McGill University Health Centre to analyze and optimize treatment outcomes. The project involved data processing, visualization, and predictive modeling."
          link="https://github.com/marcuskam01/muhc-analytics"
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