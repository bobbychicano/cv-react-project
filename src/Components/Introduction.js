import React, { Component } from "react";

class Introduction extends Component {
  render() {
    return (
      <div>
        <label for="fullName">Name: </label>
        <input
          type="text"
          value={this.props.value.fullName}
          id="fullName"
          onChange={this.props.onChange}
        ></input>
        <label for="emailAddress">Email Address: </label>
        <input
          type="email"
          value={this.props.value.emailAddress}
          id="emailAddress"
          onChange={this.props.onChange}
        ></input>
        <label for="phoneNumber">Phone Number: </label>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          maxlength="10"
          value={this.props.value.phoneNumber}
          id="phoneNumber"
          onChange={this.props.onChange}
        ></input>
      </div>
    );
  }
}

export default Introduction;
