import React from 'react'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Education from './components/Education'
import Nav from './components/Nav'
import Projects from './components/Projects'

const Home = () => {
    return (
        <>
            <Nav/>
            <Banner/>
            <Education/>
            <Projects/>
            <About/>
            <Contact/>

        </>
    )
}

export default Home
