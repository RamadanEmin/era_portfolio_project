import React from 'react';
import './about.css';
import NavBar from '../../components/NavBar/NavBar';
import ButtomReturn from '../../components/ButtonReturn/ButtomReturn';
import ParticlesAbout from '../../resources/ParticlesAbout';
import myphoto from '../../images/profil.png';
import { motion } from 'framer-motion';
import {
    aboutTextAnime,
    aboutImgAnime,
    pageAnime
} from '../../resources/Animation';

export default function About() {
    return (
        <motion.div
            className='about_container'
            variants={pageAnime}
            initial='initial'
            animate='animate'>
            <NavBar />
            <ButtomReturn />
            <ParticlesAbout />
            <motion.p
                variants={aboutTextAnime}
                initial='initial'
                animate='animate'>
                And here we don't have again Lorem Ipsum, it's me Ramadan, who recently rekindled his passion for programming.
            </motion.p>
            <motion.img
                drag dragConstraints={{ right: 10, left: 10, top: 10, bottom: 10 }}
                variants={aboutImgAnime}
                initial='initial'
                animate='animate'
                src={myphoto}
            >
            </motion.img>
        </motion.div>
    );
}
