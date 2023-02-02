import React from 'react';
import '../styles/Card.css';

export default function Card(props) {
  return (
    <div
      className="card-container"
      onClick={() => {
        props.handleCardClick(props.player.id);
      }}
    >
      <img
        src={require(`../images/${props.player.firstName.toLowerCase()}-${props.player.lastName.toLowerCase()}.png`)}
        className="card-img"
        alt="basketball player"
      />
      <div className="card-text-container">
        <p className="card-text">
          {props.player.firstName} {props.player.lastName}
        </p>
      </div>
    </div>
  );
}
