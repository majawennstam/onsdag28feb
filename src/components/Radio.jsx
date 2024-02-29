//Skapa en ny komponent Radio som har en ruta för att visa text (div) samt två radioknappar. 
//När man väljer en radioknapp ska dess text visas i rutan.
import {useState} from "react";

const Radio = () => {
    const[selected, setSelected] = useState('')
    
    
    const handleSelect = (event) => {
        setSelected(event.target.value)


    };

    return (

        <>
        <fieldset>
            <legend>Radio killed the radio star</legend>
            <input type="radio" name="radioButtons" id="cat" value="Cat" onChange={handleSelect} />
            <label htmlFor="cat">Katt</label>
            <input type="radio" name="radioButtons" id="dog" value="Dog" onChange={handleSelect} />
            <label htmlFor="Dog">Hånn</label>
        </fieldset>

        <p>
            {selected}

        </p>

        </>


    );
};

export default Radio;