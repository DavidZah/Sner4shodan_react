import React from 'react';
import {getJsonData} from './../Api'
import {ErrorNotFound} from './NotFound'
import Services from './Service';

function BackButton(props) {
        return (
            <button className="back" onClick={() => props.onClick()}>
                Back
            </button>
        );
}



class Host extends React.Component {

    findId(json_data){
      var id_name = this.props.match.params.id;
      
      for(var i in json_data.data){
        if(json_data.data[i].host_name == id_name) {
          this.state = { hostFound:true};
          return(json_data.data[i]); 
        }
        
      } 
      this.state = { hostFound:false};
    }

    render(){
      const json_data = getJsonData();
      var x = this.findId(json_data);
      if(this.state.hostFound){
        return(
            <Services renderOneService={true} service={x} />
        );
      }
      return(
          <ErrorNotFound/>
      );
    }
}

export default Host;
