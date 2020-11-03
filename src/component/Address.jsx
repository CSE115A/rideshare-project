import React from "react";

class Address extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Address">
        <label for="address">{this.props.text}</label>
        <input></input>
      </div>
    );
  }
}

export default Address;
