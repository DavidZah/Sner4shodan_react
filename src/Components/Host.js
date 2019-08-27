import React from 'react';
import { getJsonData } from './../Api';
import { ErrorNotFound } from './NotFound';
import { Services } from './Service';
import { Redirect } from 'react-router';

function BackButton(props) {
    return (
        <button className="btn btn-default" onClick={() => props.onClick()}>
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
            if (json_data.data[i].address === id_name) {
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
        var data = this.findId(json_data);

        if (this.state.returnToHost) {
            this.setState(() => ({
                returnToHost: false,
            }));
            return <Redirect to="/hosts" />;
        }

        if (data !== false) {
            return (
                <div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3>Host data</h3>
                            <div className="panel-body">
                               
                               <li>Id:{data.id}</li>
                               <li>Name:{data.host_name}</li>
                               <li>Addres:{data.address}</li>
                               <li>Operating system:{data.os}</li>
                               <li>Comment:{data.comment}</li>
                               <li>Created:{data.created}</li>
                               <li>Modified:{data.modified}</li>
                            </div>
                        </div> 
                    </div>
                    <Services renderOneService={true} service={data} />
                    <BackButton onClick={() => this.handleClick()} />
                </div>
            );
        }

        return <ErrorNotFound />;
    }
}
