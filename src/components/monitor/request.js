import React from 'react';

export default class Request extends React.Component{

    constructor(){
        super()
        this.state={
            student:[]
        }
    }

    componentWillMount(){
        this.getRequest();
    }

    getRequest(){
        let url = "http://35.185.179.159:8080/api/monitor/trainingPointForms"
        fetch(url)
        .then(respone=>respone.json())
        .then(respone=>{
           // console.log(respone)
            this.setState({
                student:respone
            })

        })
    }

    handleAccepted(event){
        event.preventDefault();
        console.log(event.target.parentNode.id);
        let studentID = event.target.parentNode.id;
        let monitorID = this.props.match.params.id;

        //http://35.185.179.159:8080/api/monitor/trainingPointForm/12121/state/accepted?monitorID=0003
        let url = "http://35.185.179.159:8080/api/monitor/trainingPointForm/"
                 + studentID + "/state/accepted?monitorID="+monitorID;

        fetch(url)
        .then(respone=>{
            if(respone.status == 200){
                this.getRequest()
            }
        })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                {this.state.student.map(student=>{
                    //console.log("yooo");
                    return <div id={student.studentID}>
                                <div>{student.studentName}</div> 
                                <button onClick={(event)=>this.handleAccepted(event)}>Accepted</button> 
                                <button onClick={(event)=>this.handleRejected(event)}> Rejected</button>
                            </div>
                })}
            </div>
        )
    }
}