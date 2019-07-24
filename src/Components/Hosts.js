import React from 'react';
import { getJsonData } from './../Api';

function HostButton(props) {
    return (
        <div>
            <button className="hostButton" onClick={() => props.onClick()}>
                {props.host_name}
            </button>
        </div>
    );
}

export class Hosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { returnToHost: false, renderHostNum: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        const json_data = getJsonData();
        this.props.history.push(`/host/` + json_data.data[i].host_name);
    }

    renderAll() {
        const json_data = getJsonData();
        let data = [];
        for (let i in json_data.data) {
            data.push(<HostButton host_name={json_data.data[i].host_name} onClick={() => this.handleClick(i)} />);
        }
        return data;
    }

    render() {
        return this.renderAll();
    }
}
