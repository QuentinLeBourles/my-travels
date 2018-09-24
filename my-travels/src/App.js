import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My-Travels</h1>
        </header>
        <Travel
          Distance="495km"
          Destination="Saragosse"
          Country="Espagne"
          image="https://www.monde-du-voyage.com/espagne/sejour-saragosse.jpg"
        />
        <Travel
          Distance="637km"
          Destination="Barcelone"
          Country="Espagne"
          image="https://www.alibabuy.com/photos/library/1500/10453.jpg"
        />
      </div>
    );
  }
}

export default App;