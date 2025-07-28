import React, {useState} from 'react'
import '../assets/style/palette.css';
import '../assets/style/Proggetti.css';
import collezione from '../assets/collections/progetti.json';

function Progetti() {
    return (
        <>
            <div className="progettini">
                {collezione.map((item) => (
                    <div className="itemCard" key={item.id}>
                        <img className="itemThumbnail" src={item.img} alt="Cover Image"
                             onClick={() => setImgInPopup(item.img)}/>
                        <div className="itemInfo">
                            <span className="h5">Titolo:</span> <span className="p">{item.titolo}</span><br/>
                            <span className="h5">Descrizione:</span> <span className="p">{item.descrizione}</span><br/>
                            <span className="h5">Link:</span> <span className="p">{item.link}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Progetti;