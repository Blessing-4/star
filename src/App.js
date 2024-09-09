import React, { useState, useEffect } from 'react';
import axios from 'axios';
import starwar1 from './images/starwar1.jpg';
import starwar2 from './images/starwar2.jpg';
import starwar3 from './images/starwar3.jpg';
import starwar4 from './images/starwar4.jpg';
import starwar5 from './images/starwar5.jpg';
import starwar6 from './images/starwar6.jpg';
import starwar7 from './images/starwar7.jpg';
import './App.css'

const imagesmap = [
  {
    name: 'Beru whitesun lars',
    image: starwar1,
    details: {
      height: '200cm',
      mass: '10kg',
      hair_color: 'blue',
      eye_color: 'black',
      birth_year: '1989',
      gender: 'male'
    }
  },
  {
    name: 'alker',
    image: starwar2,
    details: {
      height: '200cm',
      mass: '13kg',
      hair_color: 'glue',
      eye_color: 'black',
      birth_year: '1989',
      gender: 'male'
    }
  },
  {
    name: 'C-3po',
    image: starwar3,
    details: {
      height: '200cm',
      mass: '13kg',
      hair_color: 'glue',
      eye_color: 'black',
      birth_year: '1989',
      gender: 'male'
    }
  },
  {
    name: 'walker',
    image: starwar4,
    details: {
      height: '200cm',
      mass: '13kg',
      hair_color: 'glue',
      eye_color: 'black',
      birth_year: '1989',
      gender: 'male'
    }
  },
  {
    name: 'luke ',
    image: starwar5,
    details: {
      height: '200cm',
      mass: '13kg',
      hair_color: 'glue',
      eye_color: 'black',
      birth_year: '1989',
      gender: 'male'
    }
  },
  {
    name: 'skywalker',
    image: starwar6,
    details: {
      height: '200cm',
      mass: '13kg',
      hair_color: 'glue',
      eye_color: 'black',
      birth_year: '1989',
      gender: 'male'
    }
  },
  {
    name: 'teasler trailer',
    image: starwar7,
    details: {
      height: '200cm',
      mass: '13kg',
      hair_color: 'glue',
      eye_color: 'black',
      birth_year: '1989',
      gender: 'female'
    }
  }
];

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

  // Function to run when clicking any character
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
            <img src={imagesmap[index].image} alt={character.name} />
            <h3>{character.name}</h3>

            {/* Display details only if the character is selected */}
            {selectedCharacter === character && (
              <div className='character-detail'>
                <p>
                  <strong>Height: </strong>
                  {imagesmap[index].details.height}
                </p>
                <p>
                  <strong>Mass: </strong>
                  {imagesmap[index].details.mass}
                </p>
                <p>
                  <strong>Hair Color: </strong>
                  {imagesmap[index].details.hair_color}
                </p>
                <p>
                  <strong>Eye Color: </strong>
                  {imagesmap[index].details.eye_color}
                </p>
                <p>
                  <strong>Birth Year: </strong>
                  {imagesmap[index].details.birth_year}
                </p>
                <p>
                  <strong>Gender: </strong>
                  {imagesmap[index].details.gender}
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