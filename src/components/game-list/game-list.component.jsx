import React from 'react';

import { Game } from '../game/game.component';

import './game-list.styles.css';

export const GamesList = props => (
  <div className='game-list'>
    {props.games.map(game => (
      <Game key={Game.GameTitle} game={game} />
    ))}
  </div>
);