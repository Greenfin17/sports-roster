import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import firebase from 'firebase';
import Routes from '../helpers/Routes';
import { getPlayers } from '../helpers/data/playerData';
import NavBar from '../components/NavBar';
import LoginButton from '../components/buttons/LoginButton';

function App() {
  const [players, setPlayers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          username: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
        getPlayers(authed.uid).then((playerArr) => {
          setPlayers(playerArr);
        });
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <Router>
      <div className='App'>
      { !user && <LoginButton />}
      { user && <NavBar /> }
        <Routes
          players={players}
          setPlayers={setPlayers}
          user={user}
        />
      </div>
    </Router>
  );
}

export default App;
