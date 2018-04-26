import React from 'react';
import {withRouter} from 'react-router-dom';

class Log extends React.Component{
    constructor(){
        super();
        this.state = {
            userName: null,
            userID: null,
            password: null,
            error: null,
        }
    }

    click(event){
        event.preventDefault();

        let url = "http://35.185.179.159:8080/api/auth/login?username=" 
                + this.state.userName + "&password="+this.state.password;

        fetch(url,{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            }
        }).then(respone=>{
          if(!respone.ok){
              throw respone;
          }

          return respone.json();
        })
        .then(respone=>{
            this.props.update(respone.userID, this.state.userName,respone.role);
            this.props.history.push('/student/'+this.state.userName+'/'+respone.userID+'/rate');
        })
        .catch(err=>{
            if(err.status == 403){
                this.setState({
                    error:"wrong password"
                })
            }else if(err.status == 404){
                this.setState({
                    error:"Account not registered"
                })
            }
        })
    }

    handleUser(event){
        this.setState({
            userName: event.target.value,
        })
    }

    handlePass(event){
        this.setState({
            password: event.target.value,
        })
    }
    
    render(){
       
        return(
            <div >
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input type="email" id="inputEmail"  placeholder="Your id"  autoFocus="" onChange={(event)=>this.handleUser(event)} /> <br/>
                <input type="password" id="inputPassword" placeholder="Password" onChange={(event)=>this.handlePass(event)}/> <br/>
                <button className="btn btn-primary" onClick={(event)=>this.click(event)} >Sign in</button>
            </form> <br/>

            <p>{this.state.error}</p>
            </div>
        );
    }
}

export default withRouter(Log);