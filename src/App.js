import React from 'react';
import 'antd/dist/antd.css';
import {Login} from './components/login';
import { Router, Route, Switch } from 'react-router-dom';
import { PatientList } from './components/patientList';
import history from './history';
import GuardedRoute from './GuardedRoute';
import { useSelector } from 'react-redux';

const App = () => {
  let isAuthenticated = useSelector(state => {
    return state.auth.isAuthenticated
  });  

  return (
    <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login}/>
      <GuardedRoute path='/patient' component={PatientList} auth={isAuthenticated} />
    </Switch>
  </Router>
  );
}

export default App;
