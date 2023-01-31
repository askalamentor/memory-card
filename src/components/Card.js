import React, { Component } from 'react';
import '../styles/Card.css';

export default class Card extends Component {
  render() {
    return (
      <div className="card-container" onClick={this.props.handleCardClick}>
        <img
          src={require(`../images/${this.props.firstName.toLowerCase()}-${this.props.lastName.toLowerCase()}.png`)}
          className="card-img"
          alt="basketball player"
        />
        <div className="card-text-container">
          <p className="card-text">
            {this.props.firstName} {this.props.lastName}
          </p>
        </div>
      </div>
    );
  }
}
