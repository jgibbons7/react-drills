import React, {Component} from 'react';
import './App.css';

class App extends Component {
constructor(){
  super()

  this.state = {
    theText: ""
  }
}

  changeText(val){
    this.setState({
      theText: val
    })
  }

  render(){
    return (
      
      <div className="App">
        <input onChange={e => this.changeText(e.target.value)}></input> {/*arrow function to set state to user input. */}
        <p>{this.state.theText}</p>  {/*this displays current value of state.theText*/}
      </div>
    );
  }
}
export default App;