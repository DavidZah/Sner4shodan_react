import React from 'react';

function Service(props){
    return(
        <div>
        <span className="service">Name:{props.serviceName} </span>
        <span className="port">Port:{props.port} </span>
        <span className="type">Type:{props.type} </span>
        </div>        
    );
}
export default Service;