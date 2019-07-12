function BackButton() {
    return (
        <button className="back" onClick={() => this.props.onClick()}>
            Back
        </button>
    );
}


class ErrorNotFound extends React.Component {


render(){
  return(
      <div>
      <h3>Not found </h3>
      <BackButton 
      
      />
    </div>
  );
}
}

export default Host;
