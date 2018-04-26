import React from 'react';
import {withRouter} from 'react-router-dom';

class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            user_name:null,
            user_id: null,
            password: null,
            role: null,
            error:null,
        }
    }

    click(event){        
        event.preventDefault();

        const url = "http://35.185.179.159:8080/api/auth/register";
        var data = {
            "fullName": this.state.user_name,
            "username": this.state.user_id,
            "password": this.state.password,
            "role": this.state.role            
        }

        fetch(url,{
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                'content-type': 'application/json'
            }
        })
        .then(respone=>{
            if(!respone.ok) throw respone

            if(respone.status === 200) this.props.history.push('/login')
        })
        .catch(err=>{
            if(err.status == 403){
                this.setState({
                    error:"Account with role monitor or adviser exist"
                })
            }

            if(err.status == 409){
                this.setState({
                    error: "Account exist"
                })
            }
        })
    }

    handleName(event){
        this,this.setState({
            user_name : event.target.value,
        })
    }

    handleUser(event){
        this.setState({
            user_id: event.target.value,
        })
    }

    handlePass(event){
        this.setState({
            password: event.target.value,
        })
    }

    handleClass(event){
        this.setState({
            class_id:event.target.value,
        })
    }

    handleRole(event){
        this.setState({
            role: event.target.value,
        })
    }

    
    render(){
        return (
            <div>
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal"> Sign up</h1>
                    <input type="text"  placeholder="Enter your full name"  autoFocus="" onChange={(event)=>this.handleName(event)} /> <br/>
                    <input type="text"  placeholder="Your id" onChange={(event)=>this.handleUser(event)} /> <br/>
                    <input type="text"  placeholder="Your role" onChange={(event)=>this.handleRole(event)} /> <br/>
                    <input type="password" id="inputPassword" placeholder="Password" onChange={(event)=>this.handlePass(event)}/> <br/>
                    <button className="btn btn-primary" onClick={(event)=>this.click(event)} >Sign up</button>
                </form> <br/>
                <p>{this.state.error}</p>

            </div>

        )
    }
}

export default withRouter(Signup);