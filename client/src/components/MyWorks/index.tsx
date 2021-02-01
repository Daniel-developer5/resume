import React from 'react'

import { motion } from 'framer-motion'
import { motionProps } from '../../App'

import './MyWorks.scss'

const MyWorks: React.FC = () => {
    return (
        <div className="MyWorks section">
            <p>
                &laquo;Everything global starts with small things&raquo; 
                <span>&#xa9; Confucius</span>
            </p>
            <motion.ul
                className="icon"
                { ...motionProps }
            >
                <li>
                    <a 
                        href="https://daniel-developer5.github.io/todo-list-react-app/" 
                        target="_blank" rel="noreferrer"
                    >
                        TodoList React App
                    </a>
                </li>
                <li>
                    <a 
                        href="https://daniel-developer5.github.io/himalayas-landing/" 
                        target="_blank" rel="noreferrer"
                    >
                        Landing Page
                    </a>
                </li>
                <li>
                    <a 
                        href="https://daniel-developer5.github.io/note-app/" 
                        target="_blank" rel="noreferrer"
                    >
                        Note App
                    </a>
                </li>
            </motion.ul>
        </div>
    )
}

export default MyWorks