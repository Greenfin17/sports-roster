// ChooseTheme.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const ChooseTheme = ({ setTheme, icons }) => {
  const [ddOpen, setddOpen] = useState(false);
  const ddToggle = (() => setddOpen(!ddOpen));
  const handleClick = (e, index) => {
    e.preventDefault();
    setTheme(index);
  };

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
  icons: PropTypes.array
};

export default ChooseTheme;
