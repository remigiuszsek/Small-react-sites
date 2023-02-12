import React from 'react'
import trollFace from '../images/Troll Face.png'

export default function Navbar() {
    return (
        <nav>
            <div className='nav-div'>
                <img alt="logo" src={trollFace} className="logo" />
                <h1>Meme Generator</h1>
            </div>
            <h3>React Course - Project 3</h3>
        </nav>
    )
}
