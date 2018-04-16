import React from 'react';

export class home extends React.Component{
    constructor(props){
        super();
        this.state = {
            user: props.user_id,
        }
    }

    render(){
        return(
            <div>this is home</div>
        )
    }
}