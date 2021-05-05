import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const PlayerCard = ({
  firstName,
  lastName,
  position,
  imageUrl
}) => {
  const history = useHistory();
  const handleEditClick = () => {
    history.push(`/edit-player/${firebaseKey}`);
  };

  return (
  <>
    <Card className='player-card'>
      <CardImg top width="100%" src={imageUrl} alt="player image" />
        <CardBody>
          <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{position}</CardSubtitle>
          <Button onClick={handleEditClick}>Button</Button>
        </CardBody>
    </Card>
  <>
  );
};

PlayerCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default PlayerCard;
