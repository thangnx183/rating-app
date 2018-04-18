import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import Log from './components/log';
import Rating from './components/student/rating';
import Respone from './components/student/respone';
import Request from './components/monitor/request';
import TeacherRespone from './components/monitor/teacherRespone'; 

const history = createBrowserHistory();

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        id : null,
        position: 1,
      }
    }

    checkLogin(event){
        console.log("clicked");
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

                    <Route exact path = {'/'} render={()=><Log history={history}/>}/>
                    <Route exact path = {'/login'} render={()=><Log history={history} />} />
                    <Route exact path ={'/student/:id'} render={()=><Rating/>}/>
                    <Route exact path ={'/student/:id/respone'} render={()=><Respone/>} />
                    <Route exact path = {'/monitor/:id'} render={()=><Request/>}  />
                    <Route exact path = {'/monitor/:id/respone'} render={()=><TeacherRespone/>} />

                </div>
            </Router>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
