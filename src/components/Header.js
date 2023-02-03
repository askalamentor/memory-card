import React from 'react';
import '../styles/Header.css';

export default function Header(props) {
  return (
    <div className="Header">
      <div className="title-container">
        <img
          src={require(`../images/nba-logo.png`)}
          alt="NBA logo"
          className="nba-logo"
        />
        <h1 className="title">NBA Memory Game</h1>
      </div>
      <div className="score-container">
        <span>Score: {props.currentScore}</span>
        <span>Best Score: {props.bestScore}</span>
      </div>
    </div>
  );
}
