import React, {useState} from 'react'
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
                <h2>ALCUNE COSE SU DI ME:</h2>
                <p>Ciao! Mi chiamo Natalia e attualmente sto frequentando il corso Software Architect Specialist. <br/>
                    Sono particolarmente attratta dal mondo dello sviluppo front-end e allo stesso tempo, nutro un forte
                    interesse per l’editoria e la scrittura, che porto con me come passione.<br/>
                    Sono aperta a diverse opportunità professionali, guidata dalla voglia di mettermi alla prova,
                    imparare continuamente e crescere nel settore informatico.<br/>
                    Ho creato questo sito per condividere alcuni dei progetti che ho realizzato durante questo corso.
                </p>
                <p>Non so se hai notato ma se guardi in alto a destra troverai tre
                    pulsanti: <span class="colore1">"Home"</span>, <span class="colore2">"Progetti"</span> e <span
                        class="colore3">"Design"</span> — ti invito a esplorare tutti i contenuti del sito e divertirti!<br/>
                </p>
                <p class="ultimo"> Se vuoi scoprire qualcosina in più su di me dai un’occhiata qui sotto:</p>
            </div>
            <div className="lista">
                <h2>ALTRE INFORMAZIONI:</h2>

                <div className="info">
                    <div className="scrittrice">
                        <h3>Sono una scrittrice:</h3>
                        <p>Sto scrivendo un libro urban fantasy incentrato su due temi: il contrasto tra il bene e
                            il male, mai netto ma sfumato, e la trasformazione e l'evoluzione personale.</p>
                    </div>

                    <div className="volontariato">
                        <h3>Faccio volontariato:</h3>
                        <p>Dono il sangue dal 2024</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HomePage
