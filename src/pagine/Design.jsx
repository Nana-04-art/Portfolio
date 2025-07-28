import {useState} from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../assets/style/palette.css';
import '../assets/style/Design.css'
import collezione from "../assets/collections/design.json";

function Design () {
    return (
        <div className="disegni">
            {collezione.map((item) => (
                <div className="IMGCard" key={item.id}>
                    <div className="itemInfo">
                        <h5>Titolo: {item.titolo} </h5>
                    </div>
                   <div className="box">
                       <img className="immagine" src={item.wireframe} alt="wireframe" />
                    <img className="immagine" src={item.mockUp} alt="mock-up" />
                   </div>
                </div>
            ))}
        </div>
    );
};

export default Design;