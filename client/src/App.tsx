import React, { useState } from 'react'

import Nav from './components/Nav'
import Home from './components/Home'
import Skills from './components/Skills'
import Education from './components/Education'
import MyWorks from './components/MyWorks'
import AboutMe from './components/AboutMe'
import Contacts from './components/Contacts'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss'

const App: React.FC = () => {
    const [ isNav, setIsNav ] = useState<boolean>(false)

    const hideNav = (e: Event) => {
        if (!(e.target as HTMLElement).className.match(/hamburger/)) {
            setIsNav(false)
            document.removeEventListener('click', hideNav)
        }
    }

    const toggleMobileNav = (open: boolean) => {
        setIsNav(open)

        if (open) {
            document.addEventListener('click', hideNav)
        }
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Nav open={isNav} setOpen={toggleMobileNav} />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/skills" component={Skills} />
                    <Route path="/education" component={Education} />
                    <Route path="/my-works" component={MyWorks} />
                    <Route path="/about-me" component={AboutMe} />
                    <Route path="/contacts" component={Contacts} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App

const variants = {
    hidden: { transform: 'translateX(-1000px)' },
    visible: { transform: 'translateX(0)' },
}

export const motionProps = {
    initial: "hidden",
    animate: "visible",
    variants: variants,
}