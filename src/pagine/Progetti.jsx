import React, {useState} from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../assets/style/palette.css';
import '../assets/style/Proggetti.css';
import collezione from '../assets/collections/progetti.json';

function Progetti() {
    const [imgInPopup, setImgInPopup] = useState(null);
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
            <footer>
                <p>© 2025 Natalia. Made with amore e tanto viola.</p>
            </footer>
        </>
    );
};

export default Progetti;