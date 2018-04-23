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
        userId : null,
        userName: null,
        role: null,
      }
    }

    checkLogin(event){
        console.log("clicked");
    }

    updateSate(id,name,role){
       /* this.setState({
            userId:id,
            role: role
        })*/
        console.log(id+" : " +role)

        this.setState({
            userId: id,
            userName: name,
            role: role
        })
    }

    signOut(){
        this.setState({
            userId: null,
            userName: null,
            role: null
        })
    }

    render() {

      return (
        <div> 
            <Router >
                <div>
                    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    {(this.state.role === "student" || this.state.role === "monitor") ?
                                    <Link class="nav-link" to={'/student/'+this.state.userName+'/'+this.state.userId+'/rate'}>Rate </Link>
                                    : null
                                    }
                                </li>

                                <li class="nav-item">
                                    {(this.state.role === "student" || this.state.role === "monitor") ?
                                    <Link class="nav-link" to={'/student/'+this.state.userName+'/'+this.state.userId+'/respone'}>Take monitor respone </Link>
                                    :null
                                    }
                                </li>

                                <li class="nav-item ">
                                    {(this.state.role === "monitor")  ?
                                    <Link class="nav-link" to={'/monitor/'+this.state.userName+'/'+this.state.userId+'/request'}> Get class request </Link>
                                    : null
                                    }
                                </li>

                                <li class="nav-item ">
                                    {(this.state.role === "monitor") ?
                                    <Link class="nav-link" to={'/monitor/'+this.state.userName+'/'+this.state.userId+'/respone'}>Take adviser respone </Link>
                                    : null
                                    }
                                </li>

                                <li class="nav-item ">
                                    {! (this.state.userId === null) ?
                                    <Link class="nav-link" to={'/'} onClick={()=>this.signOut()}>Sign out </Link>
                                    : null
                                    }
                                </li>

                                <li class="nav-item ">
                                    {(this.state.userId === null) ?
                                    <Link class="nav-link" to={'/'}>Sign in </Link>
                                    : null
                                    }
                                </li>

                                <li class="nav-item ">
                                    {(this.state.userId === null)  ?
                                    <Link class="nav-link" to={'/signup'}>Sign up </Link>
                                    : null
                                    }
                                </li>

                            </ul>
                            
                        </div>
                    </nav>

                    <Route exact path={'/'} component={()=><Log update={(id,name, role)=>this.updateSate(id,name, role)}/>}/>
                    <Route path={'/login'} component={()=><Log update={(id,name, role)=>this.updateSate(id,name, role)}/>}  />
                    <Route path={'/signup'} component={Signup} />
                    <Route path ={'/student/:name/:id/rate'} component={Rating} />
                    <Route path ={'/student/:name/:id/respone'} component={Respone} />
                    <Route path = {'/monitor/:name/:id/request'} component={Request}  />
                    <Route path = {'/monitor/:name/:id/respone'} component={TeacherRespone} />
                </div>
            </Router>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
