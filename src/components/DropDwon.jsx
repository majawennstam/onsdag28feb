//Skapa en ny komponent DropDown som har en ruta för att visa text och en dropdown. 
//När man väljer ngt val i dropdownen så ska det visas i textrutan. 
//Komponenten kan ta emot en array med fordon som läggs till i dropdownen.
import {useState} from "react";

const DropDown = ({foodArray}) =>{
    const [selectedFood, setSelectedFood] = useState('');

    const handleSelectChange = (event) => {
        setSelectedFood(event.target.value);
    };


    return(
       <>
        <label htmlFor="food">Välj mat</label>
        <select name="food" id="foodlist" onChange={handleSelectChange} value={selectedFood}>
            <option value="">välj matis</option>

            {foodArray.map((food) =>{
            return <option>{food}</option>

        })}

     
        </select>

        <p>Du har valt: {selectedFood}</p>

        
        </>
 
    )

}

export default DropDown;