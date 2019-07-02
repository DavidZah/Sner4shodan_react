import React from 'react';
import Host from './Host/Host'

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
    }
    ]
 }]
 };

class Hosts extends React.Component{
   renderAll(){
       let data =[]; 
        for(let x in json_data.data){
            data.push(<Host
                host_name = {json_data.data[x].host_name}
                />)
            }
        return(
            data
        );
   }
    render(){
        return(
            this.renderAll()
            );

    }
}

export default Hosts