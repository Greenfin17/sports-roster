import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/cards/PlayerCard';
import AddPlayerButton from '../components/buttons/AddPlayerButton';

const Players = ({
  setPlayers,
  players,
  user,
  icons,
  theme,
}) => (
  <div className='players'>
    <div className='players-header'>
      <img className='header-left' src={icons[theme].image} alt='team icon' />
      <h2>Team Roster</h2>
      <img className='header-right' src={icons[theme].image} alt='team icon' />
    </div>
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
  user: PropTypes.any,
  icons: PropTypes.array,
  theme: PropTypes.number,
};

export default Players;
