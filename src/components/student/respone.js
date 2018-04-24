import React from 'react';

export default class Respone extends React.Component{

    constructor(){
        super();
        this.state={
            status: null,
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

            return respone.json();
        })
        .then(respone=>{
            console.log(respone)
            if(respone != null){
                this.setState({
                    status: "pending"
                })
            }else{
                this.setState({
                    status: "u not sent request yet"
                })
            }
        })
        .catch(err=>{
            console.log(err);
        })
        
       this.getStatus();
   }

   shouldComponentUpdate(nextprops, nextstate){
        if(this.state.status == "pending"){
            this.getStatus();
            return true;
        }

        return false;
   }

   getStatus(){
        /*
        new api http://35.185.179.159:8080/api/monitor/feedback?studentID=12131
        
        if respone null : pending
        else stauts =  respone.status
        
        */
        //url = "http://35.185.179.159:8080/api/adviser/feedback/"+this.props.match.params.id;
        let url = "http://35.185.179.159:8080/api/monitor/feedback?studentID="+ this.props.match.params.id;
        fetch(url)
        .then(respone=>{
            if(!respone.ok){
                //console.log(respone)
                throw respone;
            }

            return respone.json();
        })
        .then((respone)=>{
          if(respone == null){
              this.setState({
                  status: "pending",
              })
          }else{
              this.setState({
                  status: respone.state,
              })
          }
        })
        .catch(err=>{
            console.log(err.status)
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