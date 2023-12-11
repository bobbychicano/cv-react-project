import React, { Component } from "react";

class Experience extends Component {
  render() {
    const { employer, years } = this.props.experienceValues;

    return (
      <div>
        <label for="employer">Employer: </label>
        <input
          type="text"
          value={employer}
          id="experience"
          name="employer"
          onChange={this.props.onChange}
        ></input>
        <label for="years">Years: </label>
        <input
          type="text"
          value={years}
          id="experience"
          name="years"
          onChange={this.props.onChange}
        ></input>
      </div>
    );
  }
}

export default Experience;
