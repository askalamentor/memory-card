import React, { useState, useEffect } from 'react';
import '../styles/Main.css';
import { Players } from '../utils';
import Card from './Card';
import uniqid from 'uniqid';

export default function Main() {
  const [players, setPlayers] = useState(Players.array);
  const [randomArr, setRandomArr] = useState([]);

  function handleCardClick(props) {
    /*  if (!event.target.selected) {
      setPlayers((event.target.selected = true));
    } */
    console.log(props.firstName);
  }

  useEffect(() => {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      setRandomArr(array);
    }

    shuffleArray(players);
  });

  return (
    <div className="Main">
      {randomArr.map((player) => (
        <Card
          firstName={player.firstName}
          lastName={player.lastName}
          key={uniqid()}
          selected={player.selected}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}
