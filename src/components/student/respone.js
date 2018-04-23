import React from 'react';

export default class Respone extends React.Component{

    constructor(){
        super();
        this.state={
            status: "u not send request yet"
        }
    }
    
   componentWillMount(){
        //http://35.185.179.159:8080/api/monitor/feedback?studentID=1bb23883-b0af-4459-9011-3f83983a3758
        //
        //http://35.185.179.159:8080/api/adviser/feedback/111

        let url = "http://35.185.179.159:8080/api/adviser/feedback/"+this.props.match.params.id;
        fetch(url)
        .then((respone)=>{
            console.log(respone)
           /* this.setState({
                status: respone.state
            })

            if(respone.state == null){
                this.setState({
                    status: "waiting",
                })
            }*/
        })
   }

    render(){
        return(
            <div>
                u can take respone of ur rating study ; {this.state.status};
            </div>
        )
    }
}