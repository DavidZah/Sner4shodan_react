import React from 'react';
import { Services } from './Service';
import { getJsonData } from './../Api';

export function Home() {

    const json_data = getJsonData();
    return (
        
        <div>
            <div class="col-xs-6 col-lg-4"></div>
            {json_data.data.map((service, serviceKey) => (
                <div key={serviceKey}>
                    <h1>{service.host_name}</h1>
                    <p><Services renderOneService={true} service={service} /></p>
                </div>
            ))}
        </div>
    );
}
