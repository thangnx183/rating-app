import React from 'react';

export default class Rating extends React.Component{

    constructor(){
        super();
        this.state = {
            rateStatus: null,
            category1: null,
            category2: null,
            category3: null
        }
    }

    onChangeForm(event){

        if(event.target.id == 1){
            this.setState({
                category1: event.target.value,
            })
        }

        if(event.target.id == 2){
            this.setState({
                category2: event.target.value,
            })
        }

        if(event.target.id == 3){
            this.setState({
                category3: event.target.value,
            })
        }
    }

    onClickButton(event){
        //http://35.185.179.159:8080/api/student/trainingPoint?userID=6f0fd751-8cec-4bd5-9926-0eb26d0d7b2e
        event.preventDefault();

        let studentID = this.props.match.params.id;
        let url = "http://35.185.179.159:8080/api/student/trainingPoint?userID=";
        url += studentID;
        
        fetch(url,{
            method: "POST",
            headers: {
                "content-type":"application/json",
            },
            body: JSON.stringify({
                category1: this.state.category1,
                category2: this.state.category2,
                category3: this.state.category3
            })
        })
        .then(respone=>{
            if(respone.status == 200){
                this.setState({
                    rateStatus: "sent"
                }) 
                this.props.history.push('/student/'+this.props.match.params.name+'/'+this.props.match.params.id+'/respone')
            }
        })

    }

    render(){

        return(
            <div>
                <form className="row" onChange={(event)=>this.onChangeForm(event)}>
                    <p className="col-sm-4">Điểm học lực</p>                                <p className="col-sm-7"><input  id='1' type='number' min="0" max="10"/></p> <br/>
                    <p className="col-sm-4">Ý thức chấp hành nội quy </p>                   <p className="col-sm-7"><input id='2'  type='number' min="0" max="10"/></p> <br/>
                    <p className="col-sm-4">Ý thức tham gia các hoạt động văn nghệ</p>      <p className="col-sm-7"><input  id='3' type='number' min="0" max="10"/></p> <br/>
                    <button className="btn btn-primary col-sm-2" onClick={(event)=>this.onClickButton(event)}>submit </button>
                </form>

                <p className="col-sm-3">{this.state.rateStatus} </p>
            </div>
        )
    }
}