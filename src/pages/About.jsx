import { motion } from 'framer-motion';
import hiking1 from '/src/assets/hiking_1.JPG';
import lake1 from '/src/assets/lake_1.jpg';
import shore1 from '/src/assets/shore_1.jpg'
import grass1 from '/src/assets/grass_1.jpg';

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
        <p>After making the Dean's List at McGill Engineering, I've worked with leading financial institutions across Canada including AMEX, TD, Manulife, Intact, and Desjardins.</p>
      </motion.div>
      <h2>What I use for work</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <ul>
          <li>Python, SQL, C#, Terraform, JS/TS</li>
          <li>Snowflake</li>
          <li>Data Build Tool (DBT), Airflow, Dagster</li>
          <li>Azure, AWS</li>
        </ul>
      </motion.div>
      
      <h2>Interests</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>When I'm not coding, you can find me reading tech blogs, learning about aviation, or exploring nature.</p>
      </motion.div>
      
      <h2>Where I've been</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <img src={hiking1} alt="Hiking picture 1" className="responsive-image-landscape"></img>
        <figcaption>Waterton, AB, Summer 2024</figcaption>

        <br />
        <img src={lake1} alt="Lake picture 1" className="responsive-image-landscape"></img>
        <figcaption>Mont-Tremblant, QC, Spring 2023</figcaption>

        <br />
        <img src={shore1} alt="Shore picture 1" className="responsive-image-landscape"></img>
        <figcaption>Cascais, Portugal, Winter 2022</figcaption>

        <br />
        <img src={grass1} alt="Grass picture 1" className="responsive-image-landscape"></img>
        <figcaption>Clifden, Ireland, Summer 2022</figcaption>
      </motion.div>
    </motion.div>
  );
};

export default About;