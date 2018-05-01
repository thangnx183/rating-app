import React from 'react';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';

import RequestDetail from './requestDetail';

class Request extends React.Component{

    constructor(props){
        super()

        console.log(props)

        this.state={
            student:[],
            currentStudent: null,
            //monitorID: props.match.params.id,
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

            this.setState({
                student:respone
            })

        })
    }

    handleAccepted(event){
        event.preventDefault();

        let studentID = event.target.parentNode.id;
        let monitorID = this.props.match.params.id;
        
        let url = "http://35.185.179.159:8080/api/monitor/trainingPointForm/"
                 + studentID + "/state/accepted?monitorID=" + monitorID;

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

        let studentID = event.target.parentNode.id;
        let monitorID = this.props.match.params.id;

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
        let url = "http://35.185.179.159:8080/api/trainingPointForm/" + event.target.parentNode.id;

        console.log(event.target.parentNode)
        let studentID = event.target.parentNode.id;
        fetch(url)
        .then(respone=>{
            if(!respone.ok){
                throw respone;
            }

            return respone.json();
        })
        .then(respone=>{
            let student = respone.data;
            student.studentID = studentID;
            this.setState({
                currentStudent: student,
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        console.log(this.state.student)
        return(
            <div className="row">
                <div className="col-md-3">
                    {this.state.student.map(student=>{
                        //console.log("yooo");
                        return <div id={student.studentID} >
                                    <div>Name : {student.studentName}</div> 
                                    <div>Username :{student.studentUsername} </div>
                                    <button className="btn btn-primary" onClick={(event)=>this.handleAccepted(event)}>Accepted</button> 
                                    <button className="btn btn-primary" onClick={(event)=>this.handleRejected(event)}> Rejected</button>
                                    <button className="btn btn-primary" onClick={(event)=>this.handleDetail(event)}>Detail </button>
                                </div>
                    })}
                </div>
                <div className="col-md-3" style={{"marginBottom":"50px","top": "10px", "backgroundColor":"#fff"}}>
                    <RequestDetail student={this.state.currentStudent} handleAccepted={()=>this.handleAccepted} handleRejected={this.handleRejected}/>
                </div>
            </div>    
           
        )
    }
}

export default withRouter(Request);