import React from 'react';

export default class TeacherRespone extends React.Component{

    componentWillMount(){
        let url = "http://35.185.179.159:8080/api/adviser/feedback";

        fetch(url)
        .then(respone=>{
            //console.log(respone.json())
            return respone.json();
        })
        .then(respone=>{
            console.log(respone)
        })
    }
    render(){
        return(
            <div>
                u can see respone from ur teacher ;
            </div>
        )
    }
}