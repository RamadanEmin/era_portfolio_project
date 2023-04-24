import React, { useState, useEffect, useRef } from 'react';
import Programmer from '../../images/programmer.jpg';
import { init } from 'ityped';
import { motion } from 'framer-motion';

export default function Intro() {

    const [isAnimating, setIsAnimating] = useState(false);

    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            init(textRef.current, {
                showCursor: false,
                backDelay: 4000,
                backSpeed: 80,
                strings: ['Hello', 'My name is Ramadan Emin', 'I develop web applications', 'Browse and check it out']
            });
        }
    }, [textRef]);

    return (
        <div
            className='intro_container'
            variants={}
            initial='initial'
            animate='animate'
        >
            <motion.h1
                variants={}
                initial='initial'
                animate='animate'>
                Welcome</motion.h1>
            <motion.p
                variants={}
                initial='initial'
                animate='animate'
                ref={textRef}></motion.p>
            <motion.img
                src={Programmer}
                onClick={() => setIsAnimating(!isAnimating)}
                initial={{ scale: 0.1, opacity: 0 }}
                animate={{
                    x: isAnimating ? -205 : 0,
                    y: isAnimating ? 330 : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    rotate: isAnimating ? 360 : 0,
                    scale: isAnimating ? 0.1 : 1,
                    transition: { duration: 1.5, ease: 'easeInOut' }
                }}
            />
        </div>
    );
}
