import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/cards/PlayerCard';
import AddPlayerButton from '../components/buttons/AddPlayerButton';

const Players = ({
  setPlayers,
  players,
  user
}) => (
  <div className='players'>
    <h2>Players</h2>
    <AddPlayerButton />
    <div className='player-card-container dflex '>
      { user && players.map((player, key) => <PlayerCard
        key={key}
        id={player.id}
        firstName={player.first_name}
        lastName={player.last_name}
        imageUrl={player.imageUrl}
        position={player.position}
        setPlayers={setPlayers}
        user={user}
        />)
      }
    </div>
</div>
);

Players.propTypes = {
  players: PropTypes.array,
  setPlayers: PropTypes.func,
  user: PropTypes.any
};

export default Players;
