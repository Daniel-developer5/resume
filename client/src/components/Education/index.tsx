import React from 'react'

import { motion } from 'framer-motion'
import { motionProps } from '../../App'

import './Education.scss'

const Education: React.FC = () => {
    return (
        <div className="Education section">
            <motion.div 
                className="icon"
                { ...motionProps }
            >
                <i className="fas fa-graduation-cap"></i>
            </motion.div>
            <ul>
                <li>
                    <p>incomplete secondary education</p>
                    <p>2011 - 2020</p>
                </li>
                <li>
                    <p>secondary education</p>
                    <p>2020 - 2022</p>
                </li>
                <li className="it">
                    <p>level up coding</p>
                    <p>2019 - 2020</p>
                </li>
                <li>
                    <p>geekHub online javaScript course</p>
                    <p>2020 - 2021</p>
                </li>
            </ul>
        </div>
    )
}

export default Education