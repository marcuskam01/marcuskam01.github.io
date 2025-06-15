import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectItem = ({ title, description, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="project-item">
      <button 
        className={`dropdown-button ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="arrow-icon">▼</span>
        <span className="project-title">{title}</span>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="project-details"
          >
            <p>{description}</p>
            {link && <a href={link} target="_blank" rel="noopener noreferrer">Learn more →</a>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectItem;