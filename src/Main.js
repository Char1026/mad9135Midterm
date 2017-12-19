import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Title from "./title";
import List from "./list";
import Detail from "./detail";

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className = "row"><Title/></div>
            <List arrayList={this.props.contactsArray}
            selectedProfile = {this.props.selectedItem}/>
        <Detail info = {this.props.contact}/>
            </div>
        )
    }
}

Main.propTypes = {
    name: PropTypes.string.isRequired
};