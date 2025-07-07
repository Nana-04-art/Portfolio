import {useState} from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../assets/style/palette.css';
import '../assets/style/Proggetti.css'
import  collezione from '../assets/collections/progetti.json';

function Progetti  () {
    return (
        <div className="progettini">
            {collezione.map((item) => (
                <div className="itemCard" key={item.id}>
                    <img className="itemThumbnail" src={item.img} alt="Cover Image" />
                    <div className="itemInfo">
                        <h5>Titolo: {item.titolo} <br/> Descrizione: {item.descrizione} <br/>Link: {item.link}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Progetti;