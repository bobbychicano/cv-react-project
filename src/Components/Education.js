import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.value.school}
          id="school"
          onChange={this.props.onChange}
        ></input>
        <label for="school">School: </label>
        <input
          type="text"
          value={this.props.value.degree}
          id="degree"
          onChange={this.props.onChange}
        ></input>
        <label for="degree">Degree: </label>
        <input
          type="text"
          value={this.props.value.years}
          id="years"
          onChange={this.props.onChange}
        ></input>
        <label for="years">Years Attended: </label>
      </div>
    );
  }
}

export default Education;
