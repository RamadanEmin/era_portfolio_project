import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import myphoto from '../../images/profil.png';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            className='about_container'
            variants={}
            initial='initial'
            animate='animate'>
            <NavBar />
            <motion.p
                variants={}
                initial='initial'
                animate='animate'>
                And here we don't have again Lorem Ipsum, it's me Ramadan, who recently rekindled his passion for programming.
            </motion.p>
            <motion.img
                drag dragConstraints={{ right: 10, left: 10, top: 10, bottom: 10 }}
                variants={}
                initial='initial'
                animate='animate'
                src={myphoto}
            >
            </motion.img>
        </motion.div>
    );
}
