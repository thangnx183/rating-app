import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import log from './components/log';
import home from './components/home'; 

const history = createBrowserHistory();

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        id : '',
      }
    }
    render() {
      return (
        <Router >
            <div>
                <Route exact path = {'/'} component= {log} />
                <Route path = {'/login'} component = {log} history={history} />
                <Route path ={'/home/:id'} component = {home} history = {history} />
            </div>
        </Router>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
