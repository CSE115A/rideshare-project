import React, { useState } from "react";
import "./AddressForm.scss";

import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const GridContainer = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]);

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact onGridReady={onGridReady} rowData={rowData}>
        <AgGridColumn field="make"></AgGridColumn>
        <AgGridColumn field="model"></AgGridColumn>
        <AgGridColumn field="price"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      value2: "",
      rowData: [],
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({
      value1: event.target.value,
      value2: this.state.value2,
      rowData: this.state.rowData,
    });
  }

  handleChange2(event) {
    this.setState({
      value1: this.state.value1,
      value2: event.target.value,
      rowData: this.state.rowData,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    /*  document.getElementById("output").innerHTML =
      "Your favorite flavor is: " +
      this.state.value1 +
      "\nand\n" +
      this.state.value2;
    */
    this.state.rowData.push({ uber: 40000, lyft: 35000 })
    this.setState({
      rowData: this.state.rowData,
    });
    console.log(this.state);
  }

  get addresses() {
    return this.state;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label class="FromLabel">
          Pick-Up Location:
          <input
            id="FromInput"
            type="text"
            value={this.state.value1}
            onChange={this.handleChange1}
          />
        </label>
        <label class="ToLabel">
          Drop-Off Location:
          <input
            id="ToInput"
            type="text"
            value={this.state.value2}
            onChange={this.handleChange2}
          />
        </label>
        <input id="SubmitLabel" type="submit" value="COMPARE!" />
        <GridContainer></GridContainer>
      </form>
    );
  }
}

export default AddressForm;
