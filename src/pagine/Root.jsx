import {useState} from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../assets/style/Root.css';
import React from 'react';
import {NavLink, Outlet} from "react-router-dom";


export const Root = () => {
    return (
        <>
            <div className="titolo">
                <header>
                    <h1>Portfolio di Natalia</h1>
                    <nav>
                        <NavLink to="/" id="home">Home</NavLink>
                        <NavLink to="progetti" id="progetti">Progetti</NavLink>
                        <NavLink to="design" id="design">Design</NavLink>
                    </nav>
                </header>
            </div>
            <Outlet/>
        </>
    );
};
