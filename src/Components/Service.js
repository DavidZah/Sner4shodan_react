import React from 'react';

const json_data =  {data:[{
    host_name: "Microsoft",
    ip: "192.168.154.2",
    "servic": [{
        name: 'Samba',
        port: '666',
        type: 'TCP'
    },
    {
        name: 'HTTP',
        port: '80',
        type: 'UDP'
    },
    {
        name: 'SSH',
        port: '23',
        type: 'TEST1'
    }
    ]
 },
 {
  host_name: "Sony",
    ip: "192.136.645.8",
    "servic": [{
        name: 'Telnet',
        port: '48',
        type: 'TCP'
    },
    {
        name: 'HTTPS',
        port: '443',
        type: 'UDP'
    },
    {
        name: 'SSH',
        port: '23',
        type: 'TCP'
    }
    ]
 },
 {
    host_name: "Pentagon",
    ip: "88.66.154.9",
    "servic": [{
        name: 'UNKOWN',
        port: '2864',
        type: 'TCP'
    },
    {
        name: 'HTTP',
        port: '80',
        type: 'UDP'
    },
    {
        name: 'SSH',
        port: '23',
        type: 'TEST1'
    },
    {
        port: '6500',
        type: 'tcp'
    },
    {
        name: 'test',
        port: '80',
        type: 'tcp'
    }
    ]
 }]
 };


class Services extends React.Component{
    
    renderAll(){
       let data =[]; 
        for(let x in json_data.data){
            for(let i in json_data.data[x].servic){
                data.push(<Service
                serviceName = {json_data.data[x].servic[i].name}
                port = {json_data.data[x].servic[i].port}
                type = {json_data.data[x].servic[i].type}
                />)
            }
        }
        return(
            data
        );
   }
   renderService(x){
       let data =[]; 
    for(let i in json_data.data[x].servic){ 
        data.push(<Service
        serviceName = {json_data.data[x].servic[i].name}
        port = {json_data.data[x].servic[i].port}
        type = {json_data.data[x].servic[i].type}
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


function Service(props){
    return(
        <div>
        <span className="service">Name:{props.serviceName} </span>
        <span className="port">Port:{props.port} </span>
        <span className="type">Type:{props.type} </span>
        </div>        
    );
}
export default Services;