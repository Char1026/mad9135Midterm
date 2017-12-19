import ReactDOM from"react-dom";
import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class ListItem extends Component {
    render(){
        return(
            <li className="contactItems" onClick={this.props.onClick} id={"contact-" + this.props.id}>
            <img src= {this.props.img.thumbnail}/>
            <div className="tFirst"> {this.props.name.first}</div>
            <div className="tLast"> {this.props.name.last}</div>
            <div> {this.props.dob}</div>
            </li>
        )
    }
}




ListItem.propTypes = {
    id: PropTypes.number,
    key: PropTypes.number,
    img: PropTypes.object.isRequired,
    name: PropTypes.object.isRequired,
    dob: PropTypes.string,
    onClick: PropTypes.func.isRequired
}