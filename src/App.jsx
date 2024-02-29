import Header from './components/header/Header'
import RepeatText from './components/RepeatText'
import List from './components/List'
import Counter from './components/Counter'
import Check from './components/Check'
import Radio from './components/Radio'
import DropDown from './components/DropDwon'
import ToDo from './components/ToDo'
import ColorBox from './components/ColorBox/ColorBox'


const App =() => {
  const foodArray = ["pasta", "pizza", "hambuargare"]

  return (
    <>
 <Header headerText= "steg 4 klart!" />
 <RepeatText count= {5} text="hejsanhoppsan lillebror" />
 <List animalArray={[ "ko", "häst", "guldfisk", "giraff"]} />
 <Counter />
 <Check />
 <Radio />
 <DropDown foodArray={foodArray} />
 <ToDo />
 <ColorBox colorArray={["pink", "purple", "red", "yellow", "orange"]} />
    </>
  )
}

export default App;
