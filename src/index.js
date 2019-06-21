import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
    }
    ]
 }]
 };

function Service(props){
    return(
        <div>
        <span className="service">Name:{props.serviceName} </span>
        <span className="port">Port:{props.port} </span>
        <span className="type">Type:{props.type} </span>
        </div>        
    );
}

function Host(props){
    return(
        <div>
        <h2 className="host_name">{props.host_name}</h2>
        </div>    
    );
}

class Menu extends React.Component{


    constructor(props){
       super(props);
   } 
   renderHost(){
       return(
           <Host/>
       );
   }


    renderService() {
        return (
          <Service/>
        );
    }

    renderJson(){
        let data = [];
        for(let x in json_data.data){
            data.push(<Host
            host_name = {json_data.data[x].host_name}
            />)
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

    render(){
        let projectName;
        projectName = "Sner4Shodan"

        return(<div>
            <div className="projectName">{projectName}</div>
            {this.renderJson()}
            </div>
        );
    }
}

ReactDOM.render(
    <Menu />,
    document.getElementById('root')
  );