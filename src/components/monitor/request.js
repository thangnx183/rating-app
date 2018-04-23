import React from 'react';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';

import RequestDetail from './requestDetail';

class Request extends React.Component{

    constructor(){
        super()
        //console.log("request construtor")
        this.state={
            student:[],
            currentStudent: null,
            //detail: false,
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
       // console.log(event.target.parentNode.id);
        let studentID = event.target.parentNode.id;
        let monitorID = this.props.match.params.id;

        //http://35.185.179.159:8080/api/monitor/trainingPointForm/12121/state/accepted?monitorID=0003
        let url = "http://35.185.179.159:8080/api/monitor/trainingPointForm/"
                 + studentID + "/state/accepted?monitorID="+monitorID;

        fetch(url)
        .then(respone=>{
            if(respone.status == 200){
                this.getRequest();
                this.setState({
                    currentStudent: null,
                })
            }
        })
    }

    handleRejected(event){
        event.preventDefault();
        //console.log(event.target.parentNode.id);
        let studentID = event.target.parentNode.id;
        let monitorID = this.props.match.params.id;

        //http://35.185.179.159:8080/api/monitor/trainingPointForm/12121/state/accepted?monitorID=0003
        let url = "http://35.185.179.159:8080/api/monitor/trainingPointForm/"
                 + studentID + "/state/rejected?monitorID="+monitorID;

        fetch(url)
        .then(respone=>{
            if(respone.status == 200){
                this.getRequest()
                this.setState({
                    currentStudent: null,
                })
            }
        })
    }

    handleDetail(event){
        //'/monitor/'+this.props.match.params.name+'/'+this.props.match.params.id+'/request/'
        //event.preventDefault();
       // console.log("yooooooooooooo")
       // console.log(event.target.parentNode.id);
        //console.log()
        //this.props.history.push('/monitor/'+this.props.match.params.name+'/'+this.props.match.params.id+'/request/'+event.target.parentNode.id)
       // this.setState({
        //    currentStudent:event.target.parentNode.id
        //})

        let url = "http://35.185.179.159:8080/api/trainingPointForm/" + event.target.parentNode.id;

        fetch(url)
        .then(respone=>respone.json())
        .then(respone=>{
            console.log(respone.status)
            this.setState({
                currentStudent: respone.data
            })
        })
    }

    render(){
        //console.log(this.state)
        return(
            <div>
                <div >
                    {this.state.student.map(student=>{
                        //console.log("yooo");
                        return <div id={student.studentID} >
                                    <div>{student.studentName}</div> 
                                    <button onClick={(event)=>this.handleAccepted(event)}>Accepted</button> 
                                    <button onClick={(event)=>this.handleRejected(event)}> Rejected</button>
                                    <button onClick={(event)=>this.handleDetail(event)}>Detail </button>
                                </div>
                    })}
                </div>

                <RequestDetail student={this.state.currentStudent} handleAccepted={this.handleAccepted} handleRejected={this.handleRejected}/>

            </div>    
           
        )
    }
}

export default withRouter(Request);