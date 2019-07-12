import React from 'react';
import Services from './Service';
import {getJsonData} from './../Api'



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
