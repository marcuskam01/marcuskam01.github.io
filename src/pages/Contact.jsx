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
        <p>Feel free to reach out to me through any of the following channels:</p>
        
        <h2>Connect With Me</h2>
        <ul>
          <li>Email: your.email@example.com</li>
          <li>GitHub: github.com/yourusername</li>
          <li>LinkedIn: linkedin.com/in/yourusername</li>
        </ul>

        <p>I'm always open to discussing new projects and opportunities!</p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;