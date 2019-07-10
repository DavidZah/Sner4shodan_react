import React from 'react';
import Services from './Service';
import {getJsonData} from './../Api';

export function Home() {
    const projectName = 'Sner4Shodan';
    const json_data = getJsonData();
    return (
        <div>
            <div className="projectName">{projectName}</div>
            {json_data.data.map((service, serviceKey) => (
                <div key={serviceKey}>
                    <h1>{service.host_name}</h1>
                    <Services renderOneService={true} serviceValue={serviceKey} />
                </div>
            ))}
        </div>
    );
}
