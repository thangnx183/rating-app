import React from 'react';

export default class home extends React.Component{
    constructor(props){
        super();
        this.state = {
            user: props.user_id,
        }
    }

    click(){
        this.props.history.push('/');
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <div>this is home, {this.props.match.params.id}, u in</div>
                <button onClick={()=>this.click()}> get out</button>
            </div>
        )
    }
}

//export default home;