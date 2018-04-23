import React from 'react'

class RequestDetail extends React.Component{
   
    render(){

        //console.log(this.props)
        if(this.props.student === null){
            return<div></div>;
        }else{
            return(
                <div>
                    noi quy : {this.props.student.category1} <br/>
                    van nghe : {this.props.student.category2} <br/>
                    y thuc hoc tap : {this.props.student.category3} <br/>
                </div>
            )
        }
    }
}

export default RequestDetail;