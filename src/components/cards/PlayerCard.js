import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button
} from 'reactstrap';
import { deletePlayer } from '../../helpers/data/playerData';

const PlayerCard = ({
  id,
  firstName,
  lastName,
  position,
  imageUrl,
  setPlayers,
  user
}) => {
  const history = useHistory();
  const handleEditClick = () => {
    history.push(`/edit-player/${id}`);
  };

  const handleDeleteClick = () => {
    if (user && id) {
      deletePlayer(user.uid, id).then((playerArr) => setPlayers(playerArr));
      history.push('/players');
    }
  };

  return (
    <>
      <Card className='player-card'>
        <CardBody className='player-card-body'>
          <CardImg top width="100%" src={imageUrl} alt='Player Image' />
          <CardTitle tag='h5'>{firstName} {lastName}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>{position}</CardSubtitle>
          <hr />
          <Button className="btn btn-info"
            onClick={handleEditClick} >Edit Player</Button>
          <Button className="btn btn-danger"
            onClick={handleDeleteClick}>Delete Player</Button>
        </CardBody>
      </Card>
    </>
  );
};

PlayerCard.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
  setPlayers: PropTypes.func,
  user: PropTypes.any
};

export default PlayerCard;
