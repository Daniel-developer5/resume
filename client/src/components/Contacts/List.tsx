import React from 'react'

import { motion } from 'framer-motion'
import { motionProps } from '../../App'

const List: React.FC = () => {
    return (
        <motion.ul {...motionProps}>
            <li>
                <i className="fas fa-phone-alt"></i>
                <span>+380966367511</span>
            </li>
            <li>
                <i className="fab fa-telegram"></i>
                <a href="https://t.me/for_my_n" target="_blank" rel="noreferrer">Telegramm</a>
            </li>
            <li>
                <i className="fab fa-github"></i>
                <a href="https://github.com/Daniel-developer5" target="_blank" rel="noreferrer">GitHub</a>
            </li>
        </motion.ul>
    )
}

export default List