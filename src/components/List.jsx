//Skapa en ny komponent List som tar emot en prop animalArray som är en array av strängar med djurnamn. 
//Komponenten visar upp dessa djurnamn med ul- och li-taggar.Visa List i App.

const List = ({animalArray}) => {
    return(
         <ul>
           {animalArray.map((animal) => {
            return <li>{animal}</li>;  
    
            
        })}
        </ul>
        );
        
};

export default List