import React from 'react'

import { motion } from 'framer-motion'
import { motionProps } from '../../App'

import './Home.scss'

const Home: React.FC = () => {
    return (
        <div className="Home section">
            <div>
                <motion.div { ...motionProps }>
                    <span>hi!</span>
                    <span>i'm daniel</span>
                </motion.div>
            </div>
        </div>
    )
}

export default Home