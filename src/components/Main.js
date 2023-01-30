import React, { useState, useEffect } from 'react';
import '../styles/Main.css';
import { Players } from '../utils';
import Card from './Card';
import uniqid from 'uniqid';

export default function Main() {
  const [players, setPlayers] = useState(Players);

  return (
    <div>
      {players.array.map((player) => (
        <Card
          firstName={player.firstName}
          lastName={player.lastName}
          key={uniqid()}
        />
      ))}
    </div>
  );
}
