import "./App.css";
import React, { Component, useState } from "react";
import Introduction from "./Components/Introduction.js";
import Education from "./Components/Education.js";
import Experience from "./Components/Experience.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      showResume: false,
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

  handleSave = (e) => {
    e.preventDefault();
    // this will render the data that has been inputted on screen into a clean UI and clear out the input fields
    this.setState({
      showResume: true,
      introduction: { fullName: "", emailAddress: "", phoneNumber: "" },
      education: { school: "", degree: "", years: "" },
      experience: { employer: "" },
    });
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
        <button type="button" name="save-button" onClick={this.handleSave}>
          Save
        </button>
        {/* A component that holds all the JSX to display the "saved" data as HTML */}
        {/* if(this.state.showResume) {
           <div>This element is rendered when the save button is clicked.</div>;
        } */}
      </div>
    );
  }
}

export default App;
