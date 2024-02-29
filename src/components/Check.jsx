//Skapa en ny komponent Check som har två checkboxes med valen Katt och Hund, samt en ruta bredvid. 
//När en checkbox blir iklickad så ska ordet visas i rutan bredvid. 
//Ifall båda är iklickade ska rutan visa “Katt och Hund”.

import {useState} from "react";

const Check = () => {
    const [cat, setCat] = useState(false);
    const [dog, setDog] = useState(false);

    const handleChangeCat = () => {
        setCat(!cat);
    };

    const handleChangeDog = () => {
        setDog(!dog);
    };

    return (

        <div>
            <div>
                <input type="checkbox" onChange={handleChangeCat} />
                <label htmlFor="katt">Katt</label>
            </div>

            <div>
                <input type="checkbox" onChange={handleChangeDog} />
                <label htmlFor="Hund">Hund</label>
            </div>
            <p> {cat && "Katt"} 
            {dog && "Hund"} </p>


        </div>
    );

};

export default Check