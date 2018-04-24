import React from 'react';

export default class TeacherRespone extends React.Component{

    constructor(){
        super();
        this.state={
            students: []
        }
    }

    componentWillMount(){
        this.getFeedback()
    }   

    getFeedback(){
        let url = "http://35.185.179.159:8080/api/adviser/feedback";

        fetch(url)
        .then(respone=>{
            //console.log(respone.json())
            if(!respone.ok){
                throw respone;
            }
            return respone.json();
        })
        .then(respone=>{
            console.log(respone)

            this.setState({
                students: respone,
            })
            console.log("this is list of adviser feedback")
            console.log(this.state)
        })
        .catch(err=>{
            console.log(err)
        })
    }



    /**
     * only rend reject request to api
     * http://35.185.179.159:8080/api/monitor/trainingPointForm/%3AstudentID/state/rejected?monitorID=%3AminotorID       
     */ 

     handleClick(event){
        let url = "http://35.185.179.159:8080/api/monitor/trainingPointForm/";
        let studentID = event.target.parentNode.id;
        let monitorID = this.props.match.params.id;

        url += studentID + '/state/rejected?monitorID='+monitorID;

        fetch(url)
        .then(respone=>{
            if(respone.status == 200){
                this.getFeedback()
            }
        })
     }

    render(){
        return(
            <div>
                <div>List of rejected students's form in your class</div>
                {this.state.students.map(student=>{
                    return  <div id={student.studentID}>
                                <span>{student.studentName}</span> <br/>
                                <span>{student.studentID}</span> <br/>
                                <button className="btn btn-primary" onClick={(event)=>this.handleClick(event)}>Send back</button>
                            </div>
                })}
            </div>
        )
    }
}