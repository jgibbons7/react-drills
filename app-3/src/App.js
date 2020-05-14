import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      theArr: [12,64, "I like cake"],
      filterStr: ''
    }
  }

  filtered(elem) {
    this.setState({
      filterStr: elem
    })
  }
  
  render(){
    const splitz = this.state.theArr.filter(function(elem, index){
      })
    return (
      <div className="App">
        <input onChange={e => this.filtered(e.target.value)}/>
        <p>{splitz}</p>
      </div>
    );
  }
}

export default App;
