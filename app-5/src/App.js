import React, { Component } from "react"
import "./App.css"
import Image from "./Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://cdp.azureedge.net/products/USA/KA/2020/PWC/PWCSING/JET_SKI_SX-R/50/EBONY_-_LIME_GREEN/2000000024.jpg"} />
      </div>
    )
  }
}

export default App