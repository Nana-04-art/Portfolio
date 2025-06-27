import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/style/palette.css';
import './HomePage.css'

function HomePage() {

    return (
        <div className="titolo">
            <header>
                <h1>Portfolio di Nyx2112</h1>
                <nav>
                    <button id="home">Home</button>
                    <button id="progetti">Progetti</button>
                    <button id="design">Design</button>
                </nav>
            </header>
            <body className="main">
            <h1>About Me</h1>
            <p>TESTO</p>
            </body>




        </div>
    )
}

export default HomePage
