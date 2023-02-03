import React, { useState, useEffect } from 'react';
import '../styles/Main.css';
import Card from './Card';

export default function Main(props) {
  const [randomArr, setRandomArr] = useState([]);

  // if any changes card's state (it can be only "selected" state),
  // shuffle player array and render again
  useEffect(() => {
    function shuffleArray(array) {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      // set mixed array
      setRandomArr(shuffledArray);
    }
    shuffleArray(props.players);
  }, [props.players]);

  return (
    <div className="Main">
      {randomArr.map((player) => (
        <Card
          player={player}
          key={player.id}
          handleCardClick={props.handleCardClick}
        />
      ))}
    </div>
  );
}
