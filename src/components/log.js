import React from 'react';
import {withRouter} from 'react-router-dom';

class Log extends React.Component{
    constructor(){
        super();
        this.state = {
            user_id: null,
            password: null,
            erorr:null,
        }
    }

    click(event){
        //console.log(event);
        this.props.history.push('/student/'+this.state.user_id)
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
    
    render(){
       //console.log(this.props)
        return(
            <div>
                <div>Login</div>
                <form>
                    <input type='text' placeholder="enter your id" onChange={(event)=>this.handleUser(event)} /> <br/>
                    <input type='password' placeholder='enter your password' onChange={(event)=>this.handlePass(event)}/> <br/>
                    <button onClick={(event)=>this.click(event)}>Login</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Log);