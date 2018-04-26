import React from 'react'

class RequestDetail extends React.Component{

   
    render(){

        console.log(this.props)
        if(this.props.student === null){
            return<div></div>;
        }else{
            return(
                <div className="row">
                    <p ClassName="col-sm-6">Điểm học lực                           </p> <p ClassName="col-sm-6">{this.props.student.category1} </p> <br/>
                    <p ClassName="col-sm-6"> Ý thức chấp hành nội quy              </p> <p ClassName="col-sm-6">{this.props.student.category2} </p> <br/>
                    <p ClassName="col-sm-6">Ý thức tham gia các hoạt động văn nghệ </p> <p ClassName="col-sm-6">{this.props.student.category3} </p> <br/>

                </div>
            )
        }
    }
}

export default RequestDetail;