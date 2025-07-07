import {useState} from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../assets/style/palette.css';
import '../assets/style/HomePage.css';
import './Progetti.jsx'
import {NavLink} from "react-router-dom";

function HomePage() {

    return (
        <div className="HomePage">

            <div className="main">
                <h1>About Me:</h1>
                <p>Ciao! Mi chiamo Natalia e sono una persona intraprendente, curiosa e creativa.
                    Attualmente sto
                    frequentando il corso Software Architect Specialist e sono particolarmente attratta
                    dal mondo dello sviluppo front-end. Allo stesso tempo, nutro un forte interesse per l’editoria e la
                    scrittura,
                    che porto con me come passione.<br/>
                    Sono aperta a diverse opportunità professionali, guidata dalla voglia di mettermi alla prova,
                    imparare continuamente e crescere nel settore informatico.<br/>
                    Ho creato questo sito per condividere alcuni dei progetti che ho realizzato durante il corso. <br/>
                    Non so se hai notato ma se guardi in alto a sinistra troverai tre pulsanti: Home, Progetti e Design
                    — ti invito a esplorare e divertirti!<br/>
                    Se vuoi scoprire di più su di me, dai un’occhiata alla lista qui sotto.
                </p>
            </div>
            <div className="lista">
                <h2>Altre cose su di me:</h2>

                <div className="ul-container">
                    <div>
                        <ul className="passione">
                            <p>Sono appassionata di:</p>
                            <li>Scrittura</li>
                            <li>Lettura</li>
                            <li>Gastronomia</li>
                            <li>Viaggi</li>
                            <li>Storia</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="scrittrice">
                            <p>Sono una scrittrice:</p>
                            <li>Sto scrivendo un libro urban fantasy incentrato su due temi: il contrasto tra il bene e
                                il male, mai netto ma sfumato, e la trasformazione e l'evoluzione personale.
                            </li>
                        </ul>
                    </div>

                    <div>

                        <ul className="volontariato">
                            <p>Faccio volontariato:</p>
                            <li>Dono il sangue</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomePage
