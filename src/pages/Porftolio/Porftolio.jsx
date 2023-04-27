import React from 'react';
import './portfolio.css';
import NavBar from '../../components/NavBar/NavBar';
import ButtomReturn from '../../components/ButtonReturn/ButtomReturn';
import { motion } from 'framer-motion';
import {
  advertsGAnimation,
  advertsIAnimation,
  pageAnime,
} from '../../resources/Animation';
import { dataPortfolio } from '../../data/Data';

export default function Porftolio() {
  return (
    <motion.div
      className="portfolio_container"
      variants={pageAnime}
      initial="initial"
      animate="animate"
    >
      <NavBar />
      <ButtomReturn />
      <motion.div
        className="portfolio_gallery"
        variants={advertsGAnimation}
        initial="initial"
        animate="animate"
      >
        {dataPortfolio.map((images, index) => (
          <div key={index}>
            <motion.div className="portfolio_card" variants={advertsIAnimation}>
              <div className="portfolio_card" variants={advertsIAnimation}>
                <div className="portfolio_title">{images.title}</div>
                <img
                  alt="projects"
                  className="portfolio_img"
                  src={images.url}
                />
                <div className="portfolio_button_container">
                  <button
                    className="live-demo-btn"
                    onClick={() => window.open(images.liveDemo, '_blank')}
                  >
                    Live Demo
                  </button>
                  <button
                    className="github-btn"
                    onClick={() => window.open(images.github, '_blank')}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
