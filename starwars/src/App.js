import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import CharacterList from './components/Characters';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

const[characters, setCharacters] = useState ([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(()=> {
  axios.get("https://rickandmortyapi.com/api/character/")
  .then((response) => {
    setCharacters(response.data.results);
    console.log(response.data.results)
  })
  .catch(error => {
    console.log("No characters found", error)
  });
}, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
       {
        console.log(characters)
      }
      {
        characters.map((item) =>{
          console.log(item)
          return(
         <CharacterList person={item}/>
          );
    })
  } 
    </div>
  );
}

export default App;  {
  console.log(characters)
}
{
  characters.map((item) =>{
    console.log(item)
    return(
   <CharacterList person={item}/>
    );
})
} 
