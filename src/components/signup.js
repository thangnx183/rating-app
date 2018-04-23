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
            erorr:null,
        }
    }

    click(event){
        //console.log(event);
        // send ajax request to server here 
        // if success go to login page
        // if not show an error
        
        event.preventDefault();

        const url = "http://35.185.179.159:8080/api/auth/register";
        var data = {
            "fullName": this.state.user_name,
            "username": this.state.user_id,
            "password": this.state.password,
            "role": this.state.role            
        }

        console.log(JSON.stringify(data));

        fetch(url,{
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                'content-type': 'application/json'
            }
        }).catch(error => console.error('Error:', error))
        .then(respone=>{
            if(respone.status === 403){
                this.setState({
                    erorr:"Account exist"
                })
            }

            if(respone.status === 200){
                this.props.history.push('/login')
                //console.log(respone.)
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
       //console.log(this.props)

        return (
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal"> Sign up</h1>
                <input type="text"  placeholder="Enter your full name"  autoFocus="" onChange={(event)=>this.handleName(event)} /> <br/>
                <input type="text"  placeholder="Your id" onChange={(event)=>this.handleUser(event)} /> <br/>
                <input type="text"  placeholder="Your role" onChange={(event)=>this.handleRole(event)} /> <br/>
                <input type="password" id="inputPassword" placeholder="Password" onChange={(event)=>this.handlePass(event)}/> <br/>
                <button className="btn btn-primary" onClick={(event)=>this.click(event)} >Sign up</button>
            </form>
        )
    }
}

export default withRouter(Signup);