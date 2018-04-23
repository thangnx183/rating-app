import React from 'react'

class RequestDetail extends React.Component{
   
    render(){

        console.log(this.props)
        if(this.props.student === null){
            return<div></div>;
        }else{
            return(
                <div>
                        </div>
            )
        }
    }
}

export default RequestDetail;