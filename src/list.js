import ReactDOM from"react-dom";
import React, {Component} from "react";
import PropTypes from "prop-types";
import ListItem from "./listItem"


export default class List extends Component {
    render(){
        return (
            <div className="listContainer">
            
            <ul className="ull">
            
            {this.props.arrayList.map(item=> 
            (<ListItem key = {item.key} id = {item.id } img= {item.picture} name= {item.name} dob= {item.dob} onClick={this.props.selectedProfile}/>
            
            ))}
            
            </ul>
            
            
            </div>
            
            
            
            
            
        )
    }
}



List.propTypes = {
    arrayList: PropTypes.array,
    selectedProfile: PropTypes.func
    
}