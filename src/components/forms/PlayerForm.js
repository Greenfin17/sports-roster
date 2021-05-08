// PlayerForm.js

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import {
  Button, Form,
  FormGroup, Label,
  Input
} from 'reactstrap';
import {
  addPlayer, updatePlayer,
  getSinglePlayer
} from '../../helpers/data/playerData';

const PlayerForm = ({
  setPlayers,
  user
}) => {
  const [singlePlayer, setSinglePlayer] = useState({
    id: '',
    first_name: '',
    last_name: '',
    position: '',
    imageUrl: '',
    uid: user ? user.uid : ''
  });

  const { id } = useParams();
  const history = useHistory();

  const handleInputChange = (e) => {
    setSinglePlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : '',
      uid: user ? user.uid : ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (singlePlayer.id) {
      updatePlayer(user.uid, singlePlayer.id, singlePlayer)
        .then((playerArr) => setPlayers(playerArr));
    } else {
      addPlayer(user.uid, singlePlayer).then((playerArr) => setPlayers(playerArr));
    }
    history.push('/players');
  };

  useEffect(() => {
    getSinglePlayer(id).then((player) => setSinglePlayer(player));
  }, []);

  return (
    <div className='form-container'>
      <Form className='player-form mb-4'>
        <FormGroup className='name-form-group'>
          <Label for='first-name'>Player First Name</Label>
          <Input type='text' className='form-control' aria-describedby='Player First Name'
            name='first_name' value={singlePlayer.first_name || ''} onChange={handleInputChange}
            placeholder='Enter Player First Name' />
          <Input type='text' className='form-control' aria-describedby='Player Last Name'
            name='last_name' value={singlePlayer.last_name || ''} onChange={handleInputChange}
            placeholder='Enter Player Last Name' />
        </FormGroup>
        <FormGroup className='form-group'>
          <Label for='positon'>Player Position</Label>
          <Input type='text' className='form-control' aria-describedby='Player Position'
            name='position' value={singlePlayer.position || ''} onChange={handleInputChange}
            placeholder='Enter Player Position' />
        </FormGroup>
        <FormGroup className='form-group'>
          <Label for='imageUrl'>Player Image Url</Label>
          <Input type='text' className='form-control' aria-describedby='Player Image Url'
            name='imageUrl' value={singlePlayer.imageUrl || ''} onChange={handleInputChange} />
        </FormGroup>
          <Button className="btn btn-info"
            onClick={handleSubmit} >Submit Player</Button>
      </Form>
    </div>
  );
};

PlayerForm.propTypes = {
  setPlayers: PropTypes.func,
  user: PropTypes.any
};

export default PlayerForm;
