import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Users from './users/pages/users';
import NewPlace from './places/pages/newPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact={true}>
            <Users />
          </Route>
          <Route path='/places/new' exact={true}>
            <NewPlace />
          </Route>
          <Route path='/:userId/places' exact={true}>
            <UserPlaces />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
