import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {getJsonData} from './../Api'



function BackButton() {
        return (
            <button className="back" onClick={() => this.props.onClick()}>
                Back
            </button>
        );
}

function ErrorNotFound(props){
    return(
        <h2>Don´t found any {props.name}</h2>
    );
}

class Host extends React.Component {
    

  
    render(){
      return(
          <div>
          <ErrorNotFound 
          name ={this.props.match.params.id}
          />
          <BackButton 
          
          />
        </div>
      );
    }
}

export default Host;
