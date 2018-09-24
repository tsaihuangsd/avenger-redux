import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import HomeView from './views/HomeView';
import AvengerListView from './views/AvengerListView';
import AvengerView from './views/AvengerView';
import AvengerFormView from './views/AvengerFormView';

// import avengersData from '../data/avengersData';
//  thumbnail https://terrigen-cdn-dev.marvel.com/content/prod/2x/010ant_com_crd_01.jpg
// When ex-criminal Scott Lang turned to his illicit skills in order to save his daughter’s life, he unexpectedly became the size-shifting, insect-commanding Super Hero known as Ant-Man!
// Ant-Man, Captain America: Civil War

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/avengers" activeClassName="activeNavButton">
              Avengers
            </NavLink>
          </li>
          <li>
            <NavLink to="/avenger-form" activeClassName="activeNavButton">
              Add New
            </NavLink></li>
        </ul>
        <Route exact path="/" component={HomeView} />
        <Route
          exact
          path="/avengers"
          component={AvengerListView}
        />
        <Route
          path="/avengers/:avengerId"
          component={AvengerView}
        />
        <Route
          path="/avenger-form"
          component={AvengerFormView}
        />
      </div>
    );
  }
}

export default withRouter(App);
