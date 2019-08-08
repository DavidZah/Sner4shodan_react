import React from 'react';
import { getJsonData } from './../Api';
import { ErrorNotFound } from './NotFound';
import { Services } from './Service';
import { Redirect } from 'react-router';

function BackButton(props) {
    return (
        <button class="btn btn-default" onClick={() => props.onClick()}>
            Back
        </button>
    );
}

export class Host extends React.Component {
    constructor(props) {
        super(props);
        this.state = { returnToHost: false };
    }

    findId(json_data) {
        var id_name = this.props.match.params.id;

        for (var i in json_data.data) {
            if (json_data.data[i].host_name === id_name) {
                return json_data.data[i];
            }
        }
        return false;
    }

    handleClick() {
        this.setState(() => ({
            returnToHost: true,
        }));
    }

    render() {
        const json_data = getJsonData();
        var x = this.findId(json_data);

        if (this.state.returnToHost) {
            this.setState(() => ({
                returnToHost: false,
            }));
            return <Redirect to="/hosts" />;
        }

        if (x !== false) {
            return (
                <div>
                    <Services renderOneService={true} service={x} />
                    <BackButton onClick={() => this.handleClick()} />
                </div>
            );
        }

        return <ErrorNotFound />;
    }
}
