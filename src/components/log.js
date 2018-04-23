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
        //console.log(event);

        event.preventDefault();
        //this.props.history.push('/student/'+this.state.user_id)
        //http://35.185.179.159:8080/api/auth/login?username=15021128&password=fdfddf
        let url = "http://35.185.179.159:8080/api/auth/login?username=" + this.state.userName + "&password="+this.state.password;

        fetch(url,{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            }
        }).then(respone=>{return respone.json()})
        .then(respone=>{
            console.log(respone);
            if(respone.status === 403){
                this.setState({
                    error:"wrong password"
                })

                //console.log("wrong paa");
            }else if(respone.status === 404){
                this.setState({
                    error:"Account not registered"
                })
            }else{
                console.log("respone : "+respone);
                this.props.update(respone.userID, this.state.userName,respone.role);
                this.props.history.push('/student/'+this.state.userName+'/'+respone.userID+'/rate');
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
       //console.log(this.state.erorr)
        return(
            <div>
                <div>Login</div>
                <form>
                    <input type='text' placeholder="enter your id" onChange={(event)=>this.handleUser(event)} /> <br/>
                    <input type='password' placeholder='enter your password' onChange={(event)=>this.handlePass(event)}/> <br/>
                    <button onClick={(event)=>this.click(event)}>Login</button>
                </form>

                <p>{this.state.error}</p>
            </div>
        );
    }
}

export default withRouter(Log);