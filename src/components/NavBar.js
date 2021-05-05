import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  NavbarToggler,
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import LogoutButton from './buttons/LogoutButton';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <Link className='navbar-brand' to='/' >Sports Roster</Link>
        <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <Link className='nav-link' to='/players'>Players</Link>
              </NavItem>
            </Nav>
            <LogoutButton />
          </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
