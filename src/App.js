import React from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter as  Router, Route, Redirect,Switch } from 'react-router-dom';
import Pagerenderer from './components/Pagerenderer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/:page/" component={Pagerenderer} /> 
          <Route path="/" render={()=> <Redirect to="/home" />} />
          <Route component={()=> 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
