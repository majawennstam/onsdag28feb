//Skapa en ny komponent ToDo som har en textruta, en knapp och en ul-lista. 
//När man klickar på knappen så läggs texten i textrutan till som en punkt i ul-listan. 
//Ifall textrutan är tom så läggs inget till.
import {useState} from "react";

function ToDo () {
    const [value, setValue] = useState('')
    const [items, setItems] = useState([])

    const AddToList = () => {
        setItems ([...items, value])
        setValue('')
    }
    
    
    return (
        <>
        <input type="text" value={value} placeholder="skriv här" id="text" name="name" onChange={(e) => setValue(e.target.value)} />
        <button type="submit" onClick={AddToList}>Lägg till</button>

        <ul>
            {items.map((item, index) =>(
                <li key={index} > {item}</li>
            ) )

            }


        </ul>
        </>

    );
};

export default ToDo;