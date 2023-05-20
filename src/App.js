import "./App.css";
import React, { Component, useState } from "react";
import Introduction from "./Components/Introduction.js";
import Education from "./Components/Introduction.js";
import Experience from "./Components/Introduction.js";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Introduction />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
