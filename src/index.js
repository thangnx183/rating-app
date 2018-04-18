import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import Log from './components/log';
import Signup from './components/signup';
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
        position: null,
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
                        <Link to={'/signup'}> Signup </Link>
                    </ul>

                    <Route exact path={'/'} render={()=><Log history={history}/>}/>
                    <Route exact path={'/login'} render={()=> <Log history={history} />} />
                    <Route path={'/signup'} render={()=><Signup history={history}/>} />
                    <Route exact path ={'/student/:id'} render={()=> <Rating history={history} />} />
                    <Route exact path ={'/student/:id/respone'} render={()=><Respone history={history}/>} />
                    <Route exact path = {'/monitor/:id'} render={()=><Request history={history}/>}  />
                    <Route exact path = {'/monitor/:id/respone'} render={()=><TeacherRespone history={history}/>} />

                </div>
            </Router>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
