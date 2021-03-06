import React from 'react';
import {Redirect} from 'react-router'

function BackButton(props) {
    return (
        <button className="btn btn-default navbar-btn"  onClick={() => props.onClick()}>
            Back
        </button>
    );
}


export class ErrorNotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = { returnToHost: false}; 
    }

handleClick(){
    this.setState(() => ({
        returnToHost:true,
    }));

}
render(){
    if(this.state.returnToHost){
        this.setState(() => ({
            returnToHost:false,
        }));
        return(
            <Redirect to='/hosts' />
        );
    }

  return(
      <div>
      <h3>Not found </h3>
      <BackButton 
        onClick={() => this.handleClick()}
      />
    </div>
  );
}
}
