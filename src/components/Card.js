import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="card-container" key={this.props.id}>
        <img
          src={require(`../images/${this.props.firstName.toLowerCase()}-${this.props.lastName.toLowerCase()}.png`)}
          className="card-img"
          alt="basketball player"
        />
        <h3 className="card-text">
          {this.props.firstName} {this.props.lastName}
        </h3>
      </div>
    );
  }
}
