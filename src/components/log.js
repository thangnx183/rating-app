import React from 'react';

export default class log extends React.Component{
    constructor(){
        super();
        this.state = {
            user_id: null,
        }
    }

    click(){
        console.log(this.state.user_id);
        this.props.history.push('/student/'+this.state.user_id)
    }

    handleInput(event){
        this.setState({
            user_id: event.target.value,
        })
    }
    
    render(){
        return(
            <div>
                <div>this is Login</div>
                <input type='text' placeholder="john snow" onChange={(event)=>this.handleInput(event)} />
                <button onClick={()=>this.click()}>Login</button>
            </div>
        );
    }
}

//export default log;