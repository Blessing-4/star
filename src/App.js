import React, { useState, useEffect } from 'react';
import axios from 'axios';
import starwar1 from './images/starwar1.jpg';
import starwar2 from './images/starwar2.jpg';
import starwar3 from './images/starwar3.jpg';
import starwar4 from './images/starwar4.jpg';
import starwar5 from './images/starwar5.jpg';
import starwar6 from './images/starwar6.jpg';
import starwar7 from './images/starwar7.jpg';
import starwar8 from "./images/starwar12.jpg"
import './App.css'

const imagesmap = 
  {
    
   "C-3PO": starwar1,
    "Luke Skywalker": starwar2,
    "R5-D4": starwar3,
    "Darth Vader":starwar4,
    "Beru Whitesun lars": starwar5,
    "Leia Organa" : starwar6,
    "Owen Lars": starwar7,
   "R2-D2": starwar8

   };

function App() {
  const [characters, setCharacters] = useState([]); // Store all Star Wars people.
  const [selectedCharacter, setSelectedCharacter] = useState(null); // To store the clicked character.

  // Fetch the Star Wars characters from API
  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then((response) => {
        setCharacters(response.data.results); // Store the fetched characters.
      })
      .catch((error) => {
        console.error('Error fetching Star Wars characters:', error); // Error handling.
      });
  }, []);

  // na the function be this when we click any character
  const handleClick = (character) => {
    setSelectedCharacter(character === selectedCharacter ? null : character); // Toggle the clicked character details.
  };

  return (
    <div className='app'>
      <h1>Star Wars Characters</h1>
      <div className='character-list'>
        {characters.slice(0, 7).map((character, index) => (
          <div
            key={index}
            className='character-card'
            onClick={() => handleClick(character)}
          >
            {/* Map the local image for each character */}
            <img src={imagesmap[character.name]} alt={character.name} />
            <h3>{character.name}</h3>

            {/* Display details when i click am */}
            {selectedCharacter === character && (
              <div className='character-detail'>
                <p>
                  <strong>Height: </strong>
                  {character.height} cm
                </p>
                <p>
                  <strong>Mass: </strong>
                  {character.mass}
                </p>
                <p>
                  <strong>Hair Color: </strong>
                  {character.hair_color}
                </p>
                <p>
                  <strong>Eye Color: </strong>
                  {character.eye_color}
                </p>
                <p>
                  <strong>Birth Year: </strong>
                  {character.birth_year}
                </p>
                <p>
                  <strong>Gender: </strong>
                  {character.gender}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;