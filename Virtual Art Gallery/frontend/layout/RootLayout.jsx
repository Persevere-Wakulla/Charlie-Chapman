import React, { useEffect, useState, createContext } from 'react'
import { NavLink, Outlet, Link } from "react-router-dom"
import LightDarkBtn from '../componets/light-dark-mode/LightDarkBtn'
import "animate.css"
import ProjectName from '../componets/pages/ProjectName'
// import 'attention_seekers/bounce.css';
export const ThemeContext = createContext()

const RootLayout = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        // console.log(theme)
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-mode')
        } else {
            document.documentElement.classList.remove('dark-mode')
        }
    }, [theme])

    return (
        <div className="root-layout">
            <header>
                <nav className='rl-nav'>
                    <div className="root-div">
                        <ProjectName/>
                        {/* <h2 className='rl-h2 animated  animate__rubberBand'> &#128444;Show Time Gallery&#128444;</h2>
                        <span></span> */}

                    </div>
                    <Link to="/" className='animated  animate__shakeX'>Home</Link>
                    <NavLink to="about" className="animated  animate__shakeY">About</NavLink>

                    <LightDarkBtn setter={setTheme}  />
                </nav>
            </header>
            <main>
                <ThemeContext.Provider value={theme}>
                    <Outlet />
                </ThemeContext.Provider>
            </main>
        </div>
    )
}

export default RootLayout