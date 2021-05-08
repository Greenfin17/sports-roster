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

const PlayerCard = ({
  id,
  firstName,
  lastName,
  position,
  imageUrl
}) => {
  const history = useHistory();
  const handleEditClick = () => {
    history.push(`/edit-player/${id}`);
  };

  return (
    <>
      <Card className='player-card'>
        <CardBody style={{ height: '180px' }}>
          <CardTitle tag='h5'>{firstName} {lastName}</CardTitle>
          <CardImg top width="100%" src={imageUrl} alt='Player Image' />
          <CardSubtitle tag='h6' className='mb-2 text-muted'>{position}</CardSubtitle>
          <hr />
          <Button className="btn btn-info"
            onClick={handleEditClick} >Edit Player</Button>
          <Button className="btn btn-danger">Delete Player</Button>
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
  imageUrl: PropTypes.string
};

export default PlayerCard;
