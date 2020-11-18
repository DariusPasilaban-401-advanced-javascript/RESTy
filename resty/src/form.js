import React from 'react';

class Form extends React.Component{

  constructor(){
    super();

    this.state = {
      url: '',
      method:'',
    }
  }

  handleClick = (event) => {

    const method = event.target.value;
    this.setState({method:method}, () => {
      console.log(this.state);
    });
    // this.state = {url: this.state.url, method:method};
    // console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render(){

    return(
        <form onSubmit={this.handleSubmit}>
          <p>Method: {this.state.method}</p>
          <input type="text"></input>
          <button onClick={this.handleClick} value="GET">GET</button>
          <button onClick={this.handleClick} value="POST">POST</button>
          <button onClick={this.handleClick} value="PUT">PUT</button>
          <button onClick={this.handleClick} value="DELETE">DELETE</button>


        </form>
    );
  }
}

export default Form;