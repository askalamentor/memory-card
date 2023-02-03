import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Players, Score } from './utils';

function App() {
  const [players, setPlayers] = useState(Players.array);
  const [currentScore, setCurrentScore] = useState(Score.currentScore);
  const [bestScore, setBestScore] = useState(Score.bestScore);
  // boolean: check if user click previously clicked card,
  // then true to reset game
  const [triggerReset, setTriggerReset] = useState(false);

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------
  function handleCardClick(id) {
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player) => {
        // id match-up
        if (player.id === id) {
          // if the card is selected for the first time
          if (!player.selected) {
            handleCurrentScore();
            // set it's clicked
            return { ...player, selected: true };
            // if not check best score and reset
          } else {
            handleBestScore();
            resetCurrentScore();
            setTriggerReset(true);
          }
        }
        return player;
      });
    });
  }

  function handleCurrentScore() {
    setCurrentScore(currentScore + 1);
  }

  function resetCurrentScore() {
    setCurrentScore(0);
  }

  function handleBestScore() {
    // check if current score is higher than best score
    bestScore < currentScore
      ? setBestScore(currentScore)
      : setBestScore(bestScore);
  }

  function resetSelectedStatus() {
    // after checking best score, set all cards to unclicked
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => ({ ...player, selected: false }))
    );
  }

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------
  useEffect(() => {
    if (triggerReset) {
      resetSelectedStatus();
      setTriggerReset(false);
    }
  }, [currentScore, bestScore, triggerReset]);

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Main
        players={players}
        setPlayers={setPlayers}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}

export default App;
