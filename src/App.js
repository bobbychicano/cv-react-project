import "./App.css";
import React, { Component } from "react";
import Introduction from "./Components/Introduction.js";
import Education from "./Components/Education.js";
import Experience from "./Components/Experience.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      showResume: false,
      introduction: {
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
      },
      education: {
        school: "",
        degree: "",
        years: "",
      },
      experience: {
        employer: "",
      },
    };
  }

  // To use nested values, it helps to use destructuring in any of my class methods (including the render() menthod)

  handleChange = (e) => {
    const { name, id, value } = e.target;

    this.setState((prevData) => ({
      [id]: {
        ...prevData,
        [name]: value,
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
          introValues={this.state.introduction}
          onChange={this.handleChange}
        />
        <Education
          educationValues={this.state.education}
          onChange={this.handleChange}
        />
        <Experience />
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
