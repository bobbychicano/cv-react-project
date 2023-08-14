import "./App.css";
import React, { Component } from "react";
import Introduction from "./Components/Introduction.js";
import Education from "./Components/Education.js";
import Experience from "./Components/Experience.js";

class App extends Component {
  constructor() {
    super();

    // Might I need to add keys here?
    // After completing maybe try flattening state and ensuring functionality in that way
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

  // Clicking the button will just "show" the info inputted.
  handleSave = (e) => {
    e.preventDefault();

    this.setState((prevData) => ({
      ...prevData,
      showResume: true,
    }));
  };

  // Clicking this button clears out input fields and state to start a new resume
  newResume = (e) => {
    e.preventDefault();

    this.setState({
      showResume: false,
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
        {this.state.showResume && (
          <div>
            This element is rendered when the {this.state.education.school}
            button is clicked.
          </div>
        )}

        {/* Maybe try to pull out the built out resume as a child component here */}
      </div>
    );
  }
}

export default App;
