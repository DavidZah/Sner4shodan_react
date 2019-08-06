import React from 'react';
import { Services } from './Service';
import { getJsonData } from './../Api';

export function Home() {

    const json_data = getJsonData();
    return (
        
        <div class="jumbotron">
            {json_data.data.map((service, serviceKey) => (
                <div class="card">
                    <div class="card-body"  key={serviceKey}>
                        <div class ="card-header">{service.host_name}</div>
                        <p><Services renderOneService={true} service={service} /></p>
                    </div>
                </div>
            ))}
        </div>
    );
}
