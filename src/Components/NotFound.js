import React from 'react';
import { Route, Redirect } from 'react-router'

function BackButton(props) {
    return (
        <button className="back" onClick={() => props.onClick()}>
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
    this.setState((state) => ({
        returnToHost:true,
    }));

}
render(){
    if(this.state.returnToHost){
        this.setState((state) => ({
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
