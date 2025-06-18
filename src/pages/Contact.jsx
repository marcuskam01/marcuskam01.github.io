import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <h1>Contact Info</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>Let's connect on the following channels!</p>
        
        <h2>Contacts</h2>
        <ul>
          <li>
            Email: <a href="mailto:marcuskam01@gmail.com" className="textlink">marcuskam01[at]gmail.com</a>
          </li>
          <li>
            LinkedIn: <a href="https://www.linkedin.com/in/marcuskam/" className="textlink" target="_blank" rel="noopener noreferrer">linkedin.com/in/marcuskam/</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/marcuskam01" className="textlink" target="_blank" rel="noopener noreferrer">github.com/marcuskam01</a>
          </li>
        </ul>

        <p>Always happy to discuss new project ideas and opportunities!</p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;