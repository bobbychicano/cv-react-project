import "./App.css";
import React, { Component } from "react";
import Introduction from "./Components/Introduction.js";
import Education from "./Components/Education.js";
import Experience from "./Components/Experience.js";

class App extends Component {
  constructor() {
    super();

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
        years: "",
      },
      editMode: false,
      editSelection: "",
    };
  }

  // To use nested values, it helps to use destructuring in any of my class methods (including the render() menthod)
  handleChange = (e) => {
    const { id, name, value } = e.target;

    this.setState((prevData) => ({
      ...prevData,
      [id]: {
        ...prevData[id],
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
  //Could the clearing out be done with recursion if the object was nested even deeper?
  newResume = (e) => {
    e.preventDefault();

    this.setState({
      showResume: false,
      introduction: { fullName: "", emailAddress: "", phoneNumber: "" },
      education: { school: "", degree: "", years: "" },
      experience: { employer: "", years: "" },
    });
  };

  render() {
    const { showResume, introduction, education, experience } = this.state;

    return (
      <div>
        {!showResume && (
          <div>
            <Introduction
              introValues={introduction}
              onChange={this.handleChange}
            />
            <Education
              educationValues={education}
              onChange={this.handleChange}
            />
            <Experience
              experienceValues={experience}
              onChange={this.handleChange}
            />
            <button type="button" name="save-button" onClick={this.handleSave}>
              Save
            </button>
          </div>
        )}

        {showResume && (
          <div>
            <h1>{introduction.fullName}</h1>
            <p>
              Email address: {introduction.emailAddress} Phone number:{" "}
              {introduction.phoneNumber}
            </p>
            <br />
            <h2>Education</h2>
            <p>School: {education.school}</p>
            <p>Degree: {education.degree}</p>
            <p>Years: {education.years}</p>
            <br />
            <h2>Experience</h2>
            <p>Employer: {experience.employer}</p>
            <p>Years: {experience.years}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
