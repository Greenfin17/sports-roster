// ChooseTheme.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { getUser, updateUser } from '../../helpers/data/userData';

const ChooseTheme = ({
  setTheme,
  icons,
  user,
  setUser
}) => {
  const [ddOpen, setddOpen] = useState(false);
  const ddToggle = (() => setddOpen(!ddOpen));
  const handleClick = (e, index) => {
    e.preventDefault();
    setTheme(index);
    getUser(user.uid).then((userResp) => {
      if (userResp[0].id) {
        setUser((prevState) => ({
          ...prevState,
          team: index,
          id: userResp[0].id
        }));
      }
    });
  };

  // setUser is asynchronous,
  // therefore we must wait until user state object
  // is updated before updating the user in firebase
  useEffect(() => {
    getUser(user.uid).then((userResp) => {
      if (user.id && userResp[0].id) {
        updateUser(userResp[0].id, user);
      }
    });
  }, [user.team]);

  return (
    <Dropdown className='choose-theme' isOpen={ddOpen} toggle={ddToggle}>
      <DropdownToggle caret>
        Theme
      </DropdownToggle>
      <DropdownMenu className='team-menu'>
        {icons.map((team, key) => <DropdownItem
          key={key} onClick={(e) => handleClick(e, key)}>{team.name} <img src={team.image}/></DropdownItem>)}
      </DropdownMenu>
    </Dropdown>
  );
};

ChooseTheme.propTypes = {
  setTheme: PropTypes.func,
  icons: PropTypes.array,
  user: PropTypes.object,
  setUser: PropTypes.func
};

export default ChooseTheme;
