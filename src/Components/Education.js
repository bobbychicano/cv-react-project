import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div>
        <label for="school">School: </label>
        <input
          type="text"
          value={this.props.educationValues.school}
          id="school"
          onChange={this.props.onChange}
        ></input>
        <label for="degree">Degree: </label>
        <input
          type="text"
          value={this.props.educationValues.degree}
          id="degree"
          onChange={this.props.onChange}
        ></input>
        <label for="years">Years Attended: </label>
        <input
          type="text"
          value={this.props.educationValues.years}
          id="years"
          onChange={this.props.onChange}
        ></input>
      </div>
    );
  }
}

export default Education;
