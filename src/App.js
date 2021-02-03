import React  from "react";
import './App.css';
import ButtonOptCoin from './button-optCoin';


import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
class App extends React.Component {
  state = {
    combination: {},
    amount: 0.00
  }
  
  async componentDidMount() {
    const response = await fetch('/index');
    const body = await response.json();
    this.setState({ isLoading: false });
  }
  
  handleCallback = (amount) =>{
    this.setState({
      amount : amount
    })

  }

  render () {
    const {isLoading} = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (

      <div className="App">
      <Container>
          <Row>
            <Col><ButtonOptCoin   amount={this.state.amount}></ButtonOptCoin></Col>
          </Row>    
       
        
          
      </Container>
      </div>
      
    );
  }
}

export default App;
