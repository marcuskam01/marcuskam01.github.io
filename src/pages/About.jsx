import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <h1>About Me</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>Hello and thanks for stopping by! My name is Marcus, and I'm currently working as a Data Engineer at a private insurance company.</p>
        
        <h2>Skills</h2>
        <ul>
          <li>Frontend Development (React, HTML, CSS)</li>
          <li>Snowflake</li>
          <li>Data Build Tool (DBT)</li>
        </ul>

        <h2>Interests</h2>
        <p>When I'm not coding, you can find me exploring new technologies, reading tech blogs, or contributing to open-source projects.</p>
      </motion.div>
    </motion.div>
  );
};

export default About;