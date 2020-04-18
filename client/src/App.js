import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
