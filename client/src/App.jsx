import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import Signup from './pages/signup';
import Cart from './pages/Cart';
import AddListing from './pages/addListing';
import Dashboard from './pages/dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/add-listing" component={AddListing} />
        <Route path="/dashboard" component={Dashboard} />
        
      </Switch>
    </Router>
  );
};

export default App;