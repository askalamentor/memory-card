import React, { useState, useEffect } from 'react';
import '../styles/Main.css';
import { Players } from '../utils';
import Card from './Card';

export default function Main() {
  const [players, setPlayers] = useState(Players.array);
  const [randomArr, setRandomArr] = useState([]);

  function handleCardClick(id) {
    setPlayers((prevPLayers) => {
      return prevPLayers.map((player) => {
        if (player.id === id) {
          return { ...player, selected: true };
        }
        return player;
      });
    });
  }

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
      console.log(shuffledArray);
      setRandomArr(shuffledArray);
    }

    shuffleArray(players);
  }, [players]);

  return (
    <div className="Main">
      {randomArr.map((player) => (
        <Card
          firstName={player.firstName}
          lastName={player.lastName}
          key={player.id}
          id={player.id}
          selected={player.selected}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}
