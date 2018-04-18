import React from 'react';
import {withRouter} from 'react-router-dom';

class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            user_id: null,
            password: null,
            class_id: null,
            position: null,
            erorr:null,
        }
    }

    click(event){
        //console.log(event);
        // send ajax request to server here 
        // if success go to login page
        // if not show an error
        this.props.history.push('/')
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

    handlePos(event){
        this.setState({
            position: event.target.value,
        })
    }

    
    render(){
       console.log(this.props)
        return(
            <div>
                <div>Sign up</div>
                <form>
                    <input type='text' placeholder="enter your id" onChange={(event)=>this.handleUser(event)} /> <br/>
                    <input type='password' placeholder='enter your password' onChange={(event)=>this.handlePass(event)}/>  <br/>
                    <input type='text' placeholder='enter your class' onChange={(event)=>this.handleClass(event)}/>  <br/>
                    <input type='text' placeholder='enter your position' onChange={(event)=>this.handlePos(event)}/>  <br/>
                    <button onClick={(event)=>this.click(event)}>Sign up</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Signup);