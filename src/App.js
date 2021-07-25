import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/index'
import './App.css';


// Because we will only be using a single web page for my website, we don't need to link to a "home" file. This will be where we place all of the components
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App
