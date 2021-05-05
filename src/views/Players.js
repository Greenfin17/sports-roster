import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/cards/PlayerCard';

const Players = ({
  players,
  user
}) => (
  <div className='players'>
    <h2>Players</h2>
    { user && players.map((player, key) => <PlayerCard
      key={key}
      first_name={player.first_name}
      last_name={player.last_name}
      imageUrl={player.imageUrl}
      position={player.position}
      />)
    }
</div>
);

Players.propTypes = {
  players: PropTypes.array,
  user: PropTypes.any
};

export default Players;
