import "./App.css";
import React, { Component, useState } from "react";
import Introduction from "./Components/Introduction.js";
import Education from "./Components/Introduction.js";
import Experience from "./Components/Introduction.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      introduction: { fullName: "", emailAddress: "", phoneNumber: "" },
      education: { university: "", courses: "" },
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
        {/* <Education />
        <Experience /> */}
      </div>
    );
  }
}

// Store all of the input information from my three main components in state. Then have a component that renders all that information.

// So state will be a really big object that holds all the values for all the input fields.

// Can you just pass an object as a prop, because that should simplify things right?

export default App;
