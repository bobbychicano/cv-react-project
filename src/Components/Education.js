import React, { Component } from "react";

class Education extends Component {
  render() {
    const { school, degree, years } = this.props.educationValues;

    return (
      <div>
        <label for="school">School: </label>
        <input
          type="text"
          value={school}
          id="education"
          name="school"
          onChange={this.props.onChange}
        ></input>
        <label for="degree">Degree: </label>
        <input
          type="text"
          value={degree}
          id="education"
          name="degree"
          onChange={this.props.onChange}
        ></input>
        <label for="years">Years Attended: </label>
        <input
          type="text"
          value={years}
          id="education"
          name="years"
          onChange={this.props.onChange}
        ></input>
      </div>
    );
  }
}

export default Education;
