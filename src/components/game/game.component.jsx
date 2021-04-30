import React from 'react';

import './game.styles.css';

export const Game = props => (
  <div className='game-container'>
    <img
      alt='game'
      src={`https://partners.9ijakids.com/index.php/thumbnail?game=${props.game.GameTitle}`}
    />
    <h2> {props.game.GameTitle} </h2>
    <p> {props.game.GameDescription} </p>
  </div>
);