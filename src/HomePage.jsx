import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/style/palette.css';
import './HomePage.css'

function HomePage() {

    return (
        <div className="HomePage">
            <div className="titolo">
                <header>
                    <h1>Portfolio di Nyx2112</h1>
                    <nav>
                        <button id="home" >Home</button>
                        <button id="progetti">Progetti</button>
                        <button id="design">Design</button>
                    </nav>
                </header>
            </div>
            <div className="main">
                <h1>About Me</h1>
                <p>Ciao! Mi chiamo Natalia e sono una persona intraprendente, curiosa e creativa. Attualmente sto
                    frequentando il corso Software Architect Specialist e sono particolarmente attratta dal mondo dello
                    sviluppo front-end. Allo stesso tempo, nutro un forte interesse per l’editoria e la scrittura, che
                    porto con me come passione.
                    Sono aperta a diverse opportunità professionali, guidata dalla voglia di mettermi alla prova,
                    imparare continuamente e crescere nel settore informatico.
                    Ho creato questo sito per condividere alcuni dei progetti che ho realizzato durante il corso. In
                    alto a sinistra troverai tre pulsanti: Home, Progetti e Design — ti invito a esplorare e divertirti!
                    Se vuoi scoprire di più su di me, dai un’occhiata alla lista qui sotto.
                </p>
            </div>
            <div className="lista">
                <ul>
                    <p>Sono appassionata di:</p>
                    <li>Scrittura</li>
                    <li>Lettura e Letteratura,</li>
                    <li>Gastronomia</li>
                    <li>Viaggi</li>
                    <li>Storia</li>
                    <p>Sono una scrittrice:</p>
                    <li> Attualmente sto scrivendo un libro urban fantasy incentrato su due temi: il contrasto tra il bene e il male, mai netto ma sfumato, e la trasformazione e l'evoluzione personale.</li>
                    <p>Faccio volontariato:</p>
                    <li>donando il sangue</li>
                </ul>
            </div>


        </div>
    )
}

export default HomePage
