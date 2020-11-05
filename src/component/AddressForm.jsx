import React from "react";
import './AddressForm.scss'
class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value1: "", value2: "" };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({ value1: event.target.value, value2: this.state.value2 });
  }

  handleChange2(event) {
    this.setState({ value1: this.state.value1, value2: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    document.getElementById("output").innerHTML =
      "Your favorite flavor is: " +
      this.state.value1 +
      "\nand\n" +
      this.state.value2;
  }

  get addresses() {
    return this.state;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label class ="FromLabel">
          Pick-Up Location:
          <input
            id="FromInput"
            type="text"
            value={this.state.value1}
            onChange={this.handleChange1}
          />
        </label>
        <label class = "ToLabel">
          Drop-Off Location:
          <input
            id="ToInput"
            type="text"
            value={this.state.value2}
            onChange={this.handleChange2}
          />
        </label>
        <input id="SubmitLabel" type="submit" value="COMPARE!" />
        <p id="output"></p>
      </form>
    );
  }
}

export default AddressForm;