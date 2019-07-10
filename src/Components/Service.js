import React from 'react';
import {getJsonData} from './../Api'
import { get } from 'http';
import { nullLiteral } from '@babel/types';

function Service(props){
    return(
        <div>
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
        </div>        
    );
}

class Services extends React.Component{
    
    renderAll(){
        const json_data = getJsonData(); 
        return(
            json_data.data.map((s,serviceKey) => (
                this.renderService(serviceKey)
                ))
        );
   }


   /*test part for rendel all by pavol*/
   renderService(x){
       const json_data = getJsonData();
       return(
            json_data.data[x].service.map((serviceKey) => (
                <Service
                id = {serviceKey.id}
                id = {serviceKey.id}
                serviceName = {serviceKey.name}
                host_id ={serviceKey.host_id}
                proto ={serviceKey.proto}
                port = {serviceKey.port}
                state = {serviceKey.state}
                info = {serviceKey.info}
                comment = {serviceKey.commnet}
                />
            ))
       );
    }
   

    render(){
       if(this.props.renderOneService){
            return(
                this.renderService(this.props.serviceValue)
            );
        }
        return(
            this.renderAll()
        );
    }
}
export default Services;