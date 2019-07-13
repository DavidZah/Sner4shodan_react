import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {getJsonData} from './../Api'
import {ErrorNotFound} from './NotFound'


function BackButton(props) {
        return (
            <button className="back" onClick={() => props.onClick()}>
                Back
            </button>
        );
}



class Host extends React.Component {

  
    render(){
      return(
          <div>
          <ErrorNotFound/>
        </div>
      );
    }
}

export default Host;
