import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      theArr: [12,64, "I like cake"],
    }
  }

  
  render(){
    const splitz = this.state.theArr.map(arrData =>
      <h2>{arrData}</h2>)
    return (
      <div className="App">
        <p>{splitz}</p>
        
      </div>
    );
  }
}

export default App;
