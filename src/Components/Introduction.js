import React, { Component } from "react";

class Introduction extends Component {
  render() {
    const { fullName, emailAddress, phoneNumber } = this.props.introValues;

    return (
      <div>
        <label for="fullName">Name: </label>
        <input
          type="text"
          value={fullName}
          id="introduction"
          name="fullName"
          onChange={this.props.onChange}
        ></input>
        <label for="emailAddress">Email Address: </label>
        <input
          type="email"
          value={emailAddress}
          id="introduction"
          name="emailAddress"
          onChange={this.props.onChange}
        ></input>
        <label for="phoneNumber">Phone Number: </label>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          maxlength="10"
          value={phoneNumber}
          id="introduction"
          name="phoneNumber"
          onChange={this.props.onChange}
        ></input>
      </div>
    );
  }
}

export default Introduction;
