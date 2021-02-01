import React from 'react'

import { motion } from 'framer-motion'
import { motionProps } from '../../App'

import './AboutMe.scss'

const AboutMe: React.FC = () => {
    return (
        <div className="AboutMe section">
            <motion.h2 { ...motionProps }>
                Who I am?
            </motion.h2>
            <p>
                Hi! I'm Daniel. I'm high school student from Ukraine and I love programming. For the moment, I do web development. It's really big sphere, which grows with every day. And my hobby consists in learning new web technologies. To be exact, I admire of JavaScript world. It's really flexible language with wide spectrum of possibilities and it just in my heart. So my aim it's to learn as much as possible related with JS.
                In addition, I'm native speaker of Ukrainian and Russian languages. Also I learn English. Now I'm in able to read documentation and name variables.
                What about my personal qualities it's that I'm christian. I follow christian maners. I don't use uncultured expressions and haven't bad habbits. Also I really punctual. For my opinion men must'n be late.
                Finally, some facts.
                I'm from big family, I play piano. I talk a lot, sometimes relatives stop me. I'm pretty and positive :)
            </p>
        </div>
    )
}

export default AboutMe