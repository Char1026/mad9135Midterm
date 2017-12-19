import ReactDOM from "react-dom";
import React, {Component} from "react";
import PropTypes from "prop-types";



export default class Detail extends Component {
    render(){
       if(!this.props.info)
       { return (<div className="clickone">Choose a contact!</div>)
            }
        else{
            return (
                <div className="contactDetails" >
                 <div className="dName">Name: {this.props.info.name.first}</div>
                 <div className="dGender">Gender: {this.props.info.gender}</div>
                 <div className="dDob">Date of birth: {this.props.info.dob}</div>
                
                 <div className="dStreet" >{this.props.info.location.street}</div>
                 <div className="dState">{this.props.info.location.city}, {this.props.info.location.state}</div>
                 <div className="dPost">{this.props.info.location.postcode}</div>
                 
                 
                 
                    <div className="dPhone">Phone: {this.props.info.phone}</div>
                    <div className="dEmail">Email: <a href="#">{this.props.info.email}</a></div>

                <div className="dImg"> <img src= {this.props.info.picture.large} /> </div>
                 
               </div>
                )
        }
    }
}


Detail.propTypes = {
    info: PropTypes.object
}

