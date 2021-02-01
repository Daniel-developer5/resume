import React from 'react'

import './Hamburger.scss'

interface HamburgerProps {
    open: boolean,
    setOpen: (open: boolean) => void,
}

const Hamburger: React.FC<HamburgerProps> = ({ setOpen, open }) => {
    const classes = ['hamburger', 'hamburger--spin']

    if (open) {
        classes.push('is-active')
    }

    return (
        <div>
            <button 
                className={classes.join(' ')} 
                style={{ outline: 'none' }}
                onClick={() => setOpen(!open)}
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
    )
}

export default Hamburger