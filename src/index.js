require("./main.scss");

import React, {component} from "react";
import ReactDOM from 'react-dom';
import Main from "./Main";
import Detail from "./detail";
import {contacts} from "./data/contacts";

let state = {};

function setState(changes) {
    state = Object.assign({}, state, changes);

    ReactDOM.render(<Main contactsArray = {contacts} selectedItem = {selectedItemo} contact = {state.contact}/> ,   document.getElementById("react-app"));
}

function selectedItemo(e){
    var id = e.target.closest("li").id.split("-")[1];
    location.hash = "#/contact/" + id;
       
    var contact = find(function (i){
        return i.id == id;
    });
    
    
    
}
    
window.addEventListener("hashchange", ()=>{
    if (location.hash.split("/").includes("contact")) {
        var id = location.hash.split("/");
        id = id[id.length - 1];
        var contact = contacts.find(function (i) {
            return i.id == id;
        });
    }
    setState({contact:contact}); });  
setState({name: "World"});