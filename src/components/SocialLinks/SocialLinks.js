import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SocialLinks() {
  return (
    <div className="social_links_container">
      <a
        href="https://github.com/RamadanEmin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.span
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: '2',
          }}
        >
          <FaGithub />
        </motion.span>
      </a>
      <a
        href="https://www.linkedin.com/in/ramadan-emin-216234269/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.span
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: '2.3',
          }}
        >
          <FaLinkedin />
        </motion.span>
      </a>
      <motion.div
        className="social_links_line"
        variants={}
        initial="initial"
        animate="animate"
      />
    </div>
  );
}