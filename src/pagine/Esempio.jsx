import '../assets/style/palette.css';
import '../assets/style/Esempio.css'

function Esempio() {
    return (
        <div className="esempio">
            {/* HERO */}
            <section className="hero">
                <h1>Ciao, sono Maddy</h1>
                <p>Sviluppo siti web creativi, eleganti e pieni di anima.</p>
                <div className="hero-buttons">
                    <a href="#progetti" className="button primary">I miei progetti</a>
                    <a href="#contatti" className="button accent">Contattami</a>
                </div>
            </section>

            {/* PROGETTI */}
            <section id="progetti" className="projects">
                <h2>Progetti recenti</h2>
                <div className="card-grid">
                    <div className="card">
                        <h3>Portfolio creativo</h3>
                        <p>Design raffinato con anima viola, costruito in React.</p>
                    </div>
                    <div className="card alt">
                        <h3>Landing page elegante</h3>
                        <p>Un’interfaccia scura e minimalista con accenti rosa.</p>
                    </div>
                </div>
            </section>

            {/* CHI SONO */}
            <section className="about">
                <h2>Chi sono</h2>
                <p>
                    Mi chiamo Maddy e amo trasformare idee in esperienze web emozionanti.
                    Mi ispiro ai colori, alla forma e alla luce per creare qualcosa di unico.
                </p>
            </section>

            {/* CONTATTI */}
            <section id="contatti" className="contact">
                <h2>Contattami</h2>
                <form>
                    <input type="text" placeholder="Il tuo nome"/>
                    <input type="email" placeholder="La tua email"/>
                    <textarea placeholder="Il tuo messaggio"></textarea>
                    <button type="submit" className="button accent">Invia</button>
                </form>
            </section>

            {/* FOOTER */}
            <footer>
                <p>© 2025 Maddy. Made with amore e tanto <span>viola</span>.</p>
            </footer>
        </div>
    )
}

export default Esempio;