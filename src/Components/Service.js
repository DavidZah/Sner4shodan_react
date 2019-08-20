import React from 'react';
import { getJsonData } from './../Api';


function Service(props) {
    return (
        <pre>
            <h3>
                <span className="id">Id:{props.id} </span>
                <span className="host_id">Host id:{props.host_id}</span>
            </h3>
            <div className="service">Name:{props.serviceName}</div>
            <div className="proto">Proto:{props.proto}</div>
            <div className="port">Port:{props.port} </div>
            <div className="state">State:{props.state} </div>
            <div className="type">Type:{props.type} </div>
            <div className="type">Info:{props.info} </div>
            <div className="type">Commnet:{props.comment} </div>
        </pre>
    );
}

export class Services extends React.Component {
    renderService(data) {
        return data.service.map((serviceKey) => (
            <Service
                id={serviceKey.id}
                serviceName={serviceKey.name}
                host_id={serviceKey.host_id}
                proto={serviceKey.proto}
                port={serviceKey.port}
                state={serviceKey.state}
                info={serviceKey.info}
                comment={serviceKey.commnet}
            />
        ));
    }

    render() {
        if (this.props.renderOneService) {
            return this.renderService(this.props.service);
        }
        const json_data = getJsonData();
        return json_data.data.map((data) => this.renderService(data));
    }
}
