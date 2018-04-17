import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import log from './components/log';
import home from './components/home';
import rating from './components/student/rating';
import respone from './components/student/respone';
import request from './components/monitor/request';
import teacherRespone from './components/monitor/teacherRespone'; 

const history = createBrowserHistory();

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        id : null,
        position: null,
      }
    }
    render() {
      return (
        <div> 
            <Router >
                <div>

                    <ul>
                        {(this.state.position === 0 || this.state.position === 1) ? <Link to={'/student/'+this.state.id}>Rating</Link>: null}
                        {(this.state.position === 0 || this.state.position === 1) ? <Link to={'/student/'+this.state.id+'/respone'}>Get Respone</Link>: null}
                        {(this.state.position === 1) ? <Link to={'/monitor/'+this.state.id}>Take request</Link>: null}
                        {(this.state.position === 1) ? <Link to={'/monitor/'+this.state.id+'/respone'}>Get respone</Link>: null}
                        {this.state.id ? <Link to={'/'} >Sign out</Link> : null}
                        {!this.state.id ? <Link to={'/'} >Sign in</Link> : null}

                    </ul>

                    <Route exact path = {'/'} component= {log} />
                    <Route exact path = {'/login'} component = {log} history={history} />
                    <Route exact path ={'/student/:id'} component = {rating} history = {history} />
                    <Route exact path ={'/student/:id/respone'} component = {respone} history={history} />
                    <Route exact path = {'/monitor/:id'} component = {request} history={history} />
                    <Route exact path = {'/monitor/:id/respone'} component = {teacherRespone} history={history} />

                </div>
            </Router>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
