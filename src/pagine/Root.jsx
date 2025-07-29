import '../assets/style/Root.css';
import React from 'react';
import {NavLink, Outlet} from "react-router-dom";


export const Root = () => {
    return (
        <div className="layout">
            <div className="titolo">
                <header>
                    <div className="barra">
                        <img src="/foto/logo/Logo.svg" alt="Logo" className="logo"/>
                        <h1>Portfolio di Natalia</h1>
                    </div>
                    <nav>
                        <NavLink to="/" id="home">Home</NavLink>
                        <NavLink to="progetti" id="progetti">Progetti</NavLink>
                        <NavLink to="design" id="design">Design</NavLink>
                    </nav>
                </header>
            </div>

            <main className="main-content">
                <Outlet/>
            </main>

            <footer>
                <p>© 2025 Natalia. Fatto con amore, tanto viola e tante altre lacrime.</p>
            </footer>
        </div>
    );
};
