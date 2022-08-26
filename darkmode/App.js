import React from "react"
import Main from './components/Main.js'
import Navbar from './components/Navbar.js'
import './App.css'

export default function App() {

    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode() {
        setDarkMode(prevVal => !prevVal)
    }

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode} />
        </div>
    )
}