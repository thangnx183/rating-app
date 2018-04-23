import React from 'react';

export default class Rating extends React.Component{

    constructor(){
        super();
        this.state = {
            "y thuc hoc tap": null,
            "noi quy": null,
            "van nghe": null
        }
    }

    onChangeForm(event){
        //console.log(event.target.id)
        if(event.target.id == 1){
            //console.log("111")
            this.setState({
                "y thuc hoc tap": event.target.value,
            })
        }

        if(event.target.id == 2){
            this.setState({
                "noi quy": event.target.value,
            })
        }

        if(event.target.id == 3){
            this.setState({
                "van nghe": event.target.value,
            })
        }
    }

    onClickButton(event){
        //http://35.185.179.159:8080/api/student/trainingPoint?userID=6f0fd751-8cec-4bd5-9926-0eb26d0d7b2e
        event.preventDefault();
        let url = "http://35.185.179.159:8080/api/student/trainingPoint?userID=";
        url += this.props.match.params.id;
        
        fetch(url,{
            method: "POST",
            headers: {
                "content-type":"application/json",
            },
            body: JSON.stringify(this.state)
        })
        .then(respone=>{
            console.log(respone)
        })

    }

    render(){
        console.log(this.state);
        return(
            <div>
                <form onChange={(event)=>this.onChangeForm(event)}>
                    y thuc hoc tap                  <input id='1' type='number'/> <br/>
                    chap hanh noi qui nha truong    <input id='2' type='number'/> <br/>
                    tham gia cac hoat dong van nghe <input id='3' type='number'/> <br/>
                    <button onClick={(event)=>this.onClickButton(event)}>submit </button>
                </form>
            </div>
        )
    }
}