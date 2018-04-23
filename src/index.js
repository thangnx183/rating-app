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

        return (
            <Link to={'/'}>Signout</Link>
        )
    }

    render() {
        console.log("index: ")
        console.log(this.state.userId)

      return (
        <div> 
            <Router >
                <div>
                    <ul>
                        {(this.state.role === "student" || this.state.role === "monitor") ? <Link to={'/student/'+this.state.userName+'/'+this.state.userId+'/rate'}>Rating</Link>: null}
                        {(this.state.role === "student" || this.state.role === "monitor") ? <Link to={'/student/'+this.state.userName+'/'+this.state.userId+'/respone'}>Get Respone</Link>: null}
                        {(this.state.role === "monitor") ? <Link to={'/monitor/'+this.state.userName+'/'+this.state.userId+'/request'}>Take request</Link>: null}
                        {(this.state.role === "monitor") ? <Link to={'/monitor/'+this.state.userName+'/'+this.state.userId+'/respone'}>Get respone</Link>: null}
                        {! (this.state.userId === null) ? <Link to={'/'}>Signout</Link> : null}
                        {(this.state.userId === null) ? <Link to={'/'} >Sign in</Link> : null}
                        { (this.state.userId === null) ? <Link to={'/signup'}> Signup </Link>: null}
                    </ul>

                    <Route exact path={'/'}  component={()=><Log update={(id,name, role)=>this.updateSate(id,name, role)}/>}/>
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
