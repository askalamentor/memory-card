import React from 'react';
import '../styles/Header.css';

export default function Header(props) {
  return (
    <div className="Header">
      <h1 className="title">Memory Game</h1>
      <div className="score-container">
        <span>Score: {props.currentScore}</span>
        <span>Best Score: {props.bestScore}</span>
      </div>
    </div>
  );
}
