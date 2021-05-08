// addPlayerButton.js

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

const AddPlayerButton = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/add-player');
  };
  return (
    <Button className='btn btn-success btn-lg mb-4'
      onClick={handleClick}>Add a Player</Button>
  );
};

export default AddPlayerButton;
