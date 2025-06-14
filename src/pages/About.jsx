import { motion } from 'framer-motion';
import hiking1 from '/src/assets/hiking_1.JPG';

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
        <p>Hello and thanks for stopping by! My name's Marcus, and I'm a Data Engineer based in Toronto, Canada.</p>
        
        <h2>What I use for work</h2>
        <ul>
          <li>Python, SQL, C#, Terraform, JS/TS</li>
          <li>Snowflake</li>
          <li>Data Build Tool (DBT)</li>
          <li>Azure, AWS</li>
        </ul>

        <h2>Interests</h2>
        <p>When I'm not coding, you can find me reading tech blogs, lifting weights, exploring nature, or trying new recipes.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}>
        <h2>Where I've been</h2>
        <img src={hiking1} alt="Hiking picture 1" className="responsive-image-landscape"></img>
        <figcaption>Waterton, AB, Summer 2024</figcaption>
      </motion.div>
    </motion.div>
  );
};

export default About;