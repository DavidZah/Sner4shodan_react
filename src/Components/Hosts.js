import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {getJsonData} from './../Api'

 function HostButton(props) {
    return (
        <div>
            <button className="host" onClick={() => props.onClick()}>
                {props.host_name}
            </button>
        </div>
    );
}


export class Hosts extends React.Component{
    
    handleClick(i) {
        this.setState((state) => ({
            
        }));
    }

    renderAll() {
        const json_data = getJsonData();
        let data = [];
        for (let i in json_data.data) {
            data.push(<HostButton host_name={json_data.data[i].host_name} onClick={() => this.handleClick(i)} />);
        }
        return data;
    }

    render(){
        return(
            this.renderAll()
        );
    }
}