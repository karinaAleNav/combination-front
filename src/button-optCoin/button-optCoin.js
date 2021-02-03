import React, { Component } from "react";

class ButtonOptCoin extends Component {

 
  
  constructor(props){
    super(props);
    this.state = {
      combination: {},
      cargando: true
    }
    this.combination = {};
    this.handlerChange = this.handlerChange.bind(this);
  }
  handlerChange = (e) =>{
    e.preventDefault();
   
    const amount = e.target[0].value;
   
    if(amount){
      console.log(amount);
      const url ='http://localhost:8080/coinService?amount=' + amount;
      fetch(url)
      .then((response) => response.json())
      .then(combination => this.setState({combination}, () => {
        this.combination = this.state.combination;
        }))
    } 
  }

render() {  
    
    const keys = Object.keys(this.state.combination);
    return <div>
    <form onSubmit={this.handlerChange}>
        <input
          type="text"
          placeholder='amount'
        />
        <button>
          Combination
        </button>
    </form>
    <div>
        {keys.map(key=>(
          <li id={key}>{key} : {this.state.combination[key]}</li>
      ))}
        </div>
  </div>;
}
}

export default ButtonOptCoin;
