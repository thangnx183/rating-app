import React from 'react';
import {withRouter} from 'react-router-dom';

class Log extends React.Component{
    constructor(){
        super();
        this.state = {
            user_id: null,
        }
    }

    click(event){
        //console.log(event);
        this.props.history.push('/student/'+this.state.user_id)
    }

    handleInput(event){
        this.setState({
            user_id: event.target.value,
        })
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                <div>this is Login</div>
                <input type='text' placeholder="john snow" onChange={(event)=>this.handleInput(event)} />
                <button onClick={(event)=>this.click(event)}>Login</button>
            </div>
        );
    }
}

export default withRouter(Log);