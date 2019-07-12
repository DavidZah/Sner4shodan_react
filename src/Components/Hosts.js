import React from 'react';
import {getJsonData} from './../Api'
import { Route, Redirect } from 'react-router'


 function HostButton(props) {
    return (
        <div>
            <button className="hostButton" onClick={() => props.onClick()}>
                {props.host_name}
            </button>
        </div>
    );
}

export class Hosts extends React.Component{
    
    handleClick(i) {

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