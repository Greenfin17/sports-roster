import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFound from '../views/NotFound';
import Home from '../views/Home';
import Players from '../views/Players';
import PlayerForm from '../components/forms/PlayerForm';
import ChooseTheme from '../components/forms/ChooseTheme';

const PlayerRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (values) => (user
    ? (<Component {...values} user={user} />)
    : (<Redirect to={{ pathname: '/not-found', state: { from: values.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PlayerRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

const Routes = ({
  players,
  setPlayers,
  user,
  setUser,
  setTheme,
  icons,
  theme
}) => (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home user={user} />} />
        <PlayerRoute
          exact
          path='/players'
          user={user}
          component={() => <Players players={players}
          setPlayers={setPlayers}
          user={user}
          icons={icons}
          theme={theme} /> }
        />
        <PlayerRoute
          exact
          path='/add-player'
          user={user}
          component={() => <PlayerForm setPlayers={setPlayers}
          user={user} /> }
        />
        <PlayerRoute
          exact
          path='/edit-player/:id'
          user={user}
          component={() => <PlayerForm setPlayers={setPlayers}
          user={user}
          /> }
        />
        <PlayerRoute
          path='/choose-theme'
          user={user}
          component={() => <ChooseTheme
            setTheme={setTheme}
            icons={icons}
            user={user}
            setUser={setUser} /> }
          />
        <Route path='*'
          component={NotFound}
        />
      </Switch>
    </div>
);

Routes.propTypes = {
  players: PropTypes.array,
  setPlayers: PropTypes.func,
  user: PropTypes.any,
  setUser: PropTypes.func,
  setTheme: PropTypes.func,
  icons: PropTypes.array,
  theme: PropTypes.number
};

export default Routes;
