import React from 'react';
import Services from './Service'


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

class Host extends React.Component {
    render() {
      return (
          <div>
            <button 
            className="host"
            onClick={() => this.props.onClick()}
            >
            {this.props.host_name}
            </button>
          </div>
      );
    }
  }

class BackButton extends React.Component{
    render(){
        return(
            <button
            className="back"
            onClick={() => this.props.onClick()}>
                Back
            </button>
        )
    }
}

class Hosts extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {renderOnehost: false,hostValue:0};

        this.handleClick = this.handleClick.bind(this);
      }
    handleBackClick(){
        this.setState(state =>({
            renderOnehost: false, hostValue:0
        }));
    }

    handleClick(i) {
        this.setState(state => ({
            renderOnehost: true, hostValue:i
          }));
    }
    
    renderAll(){
       let data =[]; 
        for(let x in json_data.data){
            data.push(<Host
                host_name = {json_data.data[x].host_name}
                onClick={() => this.handleClick(x)}
                />)
            }
        return(
            data
        );
   }
   renderHost(number){
       return(
        <Host
        host_name = {json_data.data[number].host_name} 
        onClick={() => this.handleClick(number)}
        />
       );
    } 
    renderServices(number){
        return(
            <Services
            renderOneService={true}
            serviceValue={number}
            />
        );
    }
    renderBackButton(){
        return(
            <BackButton
            onClick={() => this.handleBackClick()}
            />
        );
    }
    render(){
        if(this.state.renderOnehost){
            return(
                <div>
                    {this.renderBackButton()}
                    {this.renderServices(this.state.hostValue)}
                </div>
                );
        }
        return(
            this.renderAll()
           
        );
    }
}

export default Hosts