import React from 'react'

import { motion } from 'framer-motion'
import { motionProps } from '../../App'

import './Skills.scss'

const Skills: React.FC = () => {
    return (
        <div className="Skills section">
            <motion.div 
                className="box"
                { ...motionProps }
            >
                <div>
                    <h2>Front-end</h2>
                </div>
                <ul className="front">
                    <li>HTML5</li>
                    <li>
                        <h3>CSS3</h3>
                        <ul>
                            <li>Flexbox</li>
                            <li>Grids</li>
                            <li>Responsive</li>
                        </ul>
                    </li>
                    <li>SASS/SCSS</li>
                    <li>
                        <h3>CSS Frameworks</h3>
                        <ul>
                            <li>Bootstrap</li>
                        </ul>
                    </li>
                    <li>
                        <h3>JavaScript</h3>
                        <ul>
                            <li>ES6</li>
                            <li>Canvas</li>
                            <li>jQuery</li>
                        </ul>
                    </li>
                    <li>
                        <h3>React JS</h3>
                        <ul>
                            <li>Redux</li>
                            <li>Material UI</li>
                        </ul>
                    </li>
                    <li>TypeScript</li>
                    <li>Git</li>
                </ul>
                <div>
                    <h2>Back-end</h2>
                </div>
                <ul>
                    <li>Gulp, Webpack, NPM</li>
                    <li>
                        <h3>Node JS</h3>
                        <ul>
                            <li>Express JS</li>
                            <li>Mongo DB</li>
                        </ul>
                    </li>
                </ul>
            </motion.div>
        </div>
    )
}

export default Skills