import React from 'react'

class RequestDetail extends React.Component{

   
    render(){

        console.log(this.props)
        if(this.props.student === null){
            return<div></div>;
        }else{
            return(
                <div>
                    category 1  : {this.props.student.category1} <br/>
                    category 2  : {this.props.student.category2} <br/>
                    category 3  : {this.props.student.category3} <br/>

                </div>
            )
        }
    }
}

export default RequestDetail;