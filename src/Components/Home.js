import React from 'react';
import { Services } from './Service';
import { getJsonData } from './../Api';

export function Home() {
    const json_data = getJsonData();
    return (
        <div>
            {json_data.data.map((service, serviceKey) => (
                <div className="card-body" key={serviceKey}>
                    <h2>{service.host_name}</h2>
                    <div>
                        <Services renderOneService={true} service={service} />
                    </div>
                </div>
            ))}
        </div>
    );
}
