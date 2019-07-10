import React from 'react';
import Services from './Service';
import {getJsonData} from './../Api'


function HostButton() {
        return (
            <div>
                <button className="host" onClick={() => this.props.onClick()}>
                    {this.props.host_name}
                </button>
            </div>
        );
}

function BackButton() {
        return (
            <button className="back" onClick={() => this.props.onClick()}>
                Back
            </button>
        );
}

class Host extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hostValue: 0 };

        this.handleClick = this.handleClick.bind(this);
    }
    handleBackClick() {
        this.setState((state) => ({
            renderOnehost: false,
            hostValue: 0,
        }));
    }

    handleClick(i) {
        this.setState((state) => ({
            renderOnehost: true,
            hostValue: i,
        }));
    }

    renderAll() {
        const json_data = getJsonData(); 
        let data = [];
        for (let x in json_data.data) {
            data.push(<HostButton host_name={json_data.data[x].host_name} onClick={() => this.handleClick(x)} />);
        }
        return data;
    }
    renderHost(number) {
        const json_data = getJsonData(); 

        return <HostButton host_name={json_data.data[number].host_name} onClick={() => this.handleClick(number)} />;
    }
    renderServices(number) {
        return <Services renderOneService={true} serviceValue={number} />;
    }
    renderBackButton() {
        return <BackButton onClick={() => this.handleBackClick()} />;
    }
    
    render() {
            return (
                <div>
                    {this.renderBackButton()}
                    {this.renderServices(this.state.hostValue)}
                </div>
            );
    }
}

export default Host;
