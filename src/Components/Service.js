import React from 'react';
import {getJsonData} from './../Api'

function Service(props){
    return(
        <div>
        <span className="id">Id:{props.id}</span>
        <span className="service">Name:{props.serviceName} </span>
        <span className="port">Port:{props.port} </span>
        <span className="type">Type:{props.type} </span>
        </div>        
    );
}

class Services extends React.Component{
    
    renderAll(){
        const json_data = getJsonData(); 
       let data =[]; 
        for(let x in json_data.data){
            for(let i in json_data.data[x].service){
                data.push(<Service
                id = {json_data.data[x].service[i].id}
                serviceName = {json_data.data[x].service[i].name}
                port = {json_data.data[x].service[i].port}
                type = {json_data.data[x].service[i].type}
                />)
            }
        }
        return(
            data
        );
   }
   renderService(x){
    const json_data = getJsonData(); 
       let data =[]; 
    for(let i in json_data.data[x].servic){ 
        data.push(<Service
        serviceName = {json_data.data[x].servic[i].name}
        port = {json_data.data[x].service[i].port}
        type = {json_data.data[x].service[i].type}
        />);
    }
        return(
            data
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