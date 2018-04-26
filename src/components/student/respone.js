import React from 'react';
import {Link} from 'react-router-dom'

export default class Respone extends React.Component{

    constructor(){
        super();
        this.state={
            status: "u not sent request yet",
        }
    }
    
   componentWillMount(){
        //http://35.185.179.159:8080/api/monitor/feedback?studentID=1bb23883-b0af-4459-9011-3f83983a3758
        //
        //http://35.185.179.159:8080/api/adviser/feedback/111
        
        let url = "http://35.185.179.159:8080/api/trainingPointForm/"+this.props.match.params.id;

        fetch(url)
        .then(respone=>{
            if(!respone.ok){
                throw respone;
            }

            //this.setState({
            //    status: "u not sent request yet"
            //})

            return respone.json();
        })
        .then(respone=>{

            if(respone != null){

                this.setState({
                    status: "pending"
                })
            }
        })
        .catch(err=>{
            //console.log(err);
        })
        
       this.getStatus();
   }

    getStatus(){
       console.log("geting status ......")
        /*
        new api http://35.185.179.159:8080/api/monitor/feedback?studentID=12131
        
        if respone null : pending
        else status =  respone.status
        
        */
        //url = "http://35.185.179.159:8080/api/adviser/feedback/"+this.props.match.params.id;
        let url = "http://35.185.179.159:8080/api/monitor/feedback?studentID="+ this.props.match.params.id;
        fetch(url)
        .then(respone=>{
            if(!respone.ok) throw respone;

            return respone.json();
        }).then(respone=>{

            this.setState({
                status: respone.state,
            })
        })
        .catch(err=>{
            console.log(err.status)
        })
   }

   shouldComponentUpdate(nextProps, nextState){
       if(this.state.status == "pending" ||this.state.status == "u not sent request yet"){
           this.getStatus()
           return true;
       }

       return false
   }

    render(){
        let rateBack = '/student/'+this.props.match.params.name+'/'+this.props.match.params.id+'/rate';
        return(
            <div>
                Your status :  {this.state.status} <br/>
                {(this.state.status =="rejected") ? <Link to={rateBack}>Rate back</Link> : null }
            </div>
        )
    }
}