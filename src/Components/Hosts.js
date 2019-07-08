
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

 function HostButton(props) {
    return (
        <div>
            <button className="host" onClick={() => props.onClick()}>
                {props.host_name}
            </button>
        </div>
    );
}

export class Hosts extends React.Component{
    
    handleClick(i) {
        this.setState((state) => ({
            
        }));
    }

    renderAll() {
        let data = [];
        for (let i in json_data.data) {
            data.push(<HostButton host_name={json_data.data[i].host_name} onClick={() => this.handleClick(i)} />);
        }
        return data;
    }

    render(){
        return(
            this.renderAll()
        );
    }
}