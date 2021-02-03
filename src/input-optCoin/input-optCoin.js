import React from "react";

class InputOptCoin extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {amount:''};
    this.updateInputValue = this.updateInputValue.bind(this);
  
  }
  updateInputValue = (e) =>{
    this.setState({ amount : e.target.value }, () => {
      if (this.props.onChange) {
         this.props.onChange(this.state);
      }
    })

  }
  render() {
    return <form id="input-container">
              Amount : <input type="text" id="amount"  onChange={this.updateInputValue}/>
              
           </form>;
  }
}
export default InputOptCoin;