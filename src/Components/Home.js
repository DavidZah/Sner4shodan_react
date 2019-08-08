import React from 'react';
import { Services } from './Service';
import { getJsonData } from './../Api';

export function Home() {

    const json_data = getJsonData();
    return (
        
        <div>
            {json_data.data.map((service, serviceKey) => (
                <div>
                    <div class="well">
                        <div class="card-body"  key={serviceKey}>
                            <h2>{service.host_name}</h2>
                            <div>
                                <p><Services renderOneService={true} service={service} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
