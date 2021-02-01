import React from 'react'

import { NavLink } from 'react-router-dom'
import Hamburger from '../Hamburger'

import './Nav.scss'
import i from '../../img/i.jpg'

interface NavProps {
    open: boolean, 
    setOpen: (open: boolean) => void,
}

const Nav: React.FC<NavProps> = ({ open, setOpen }) => {
    return (
        <nav className={open ? 'open' : ''}>
            <div className="box">
                <div className="avatar">
                    <img src={i} alt="there should be i"/>
                </div>
                <div className="about">
                    <h2>Mudrak Daniel</h2>
                    <span>Front-end developer</span>
                </div>
                <ul>
                    <li>
                        <NavLink to="/" exact>home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills">skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/education">education</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-works">my works</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-me">about me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">contacts</NavLink>
                    </li>
                </ul>
            </div>
            <Hamburger setOpen={setOpen} open={open} />
        </nav>
    )
}

export default Nav