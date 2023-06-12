import "./App.css";
import React, { Component, useState } from "react";
import Introduction from "./Components/Introduction.js";
import Education from "./Components/Education.js";
import Experience from "./Components/Experience.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      introduction: { fullName: "", emailAddress: "", phoneNumber: "" },
      education: { school: "", degree: "", years: "" },
      experience: { employer: "" },
    };
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevData) => ({
      introduction: {
        ...prevData,
        [id]: value,
      },
    }));
  };

  render() {
    return (
      <div>
        <Introduction
          value={this.state.introduction}
          onChange={this.handleChange}
        />
        <Education value={this.state.education} onChange={this.handleChange} />
        {/* <Experience /> */}
      </div>
    );
  }
}

export default App;
