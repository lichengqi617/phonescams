import React, { Component } from "react";
import PhoneTableDataService from "../services/service";
import { Link } from "react-router-dom";
import { JsonToTable } from "react-json-to-table";

export default class PhoneScamDBApp extends Component {
  constructor(props) {
    super(props);
    this.getAll = this.getAll.bind(this);
    this.add = this.add.bind(this);

    this.state = {
      phoneNumbers: [],
      PhoneNumber: null,
      CountryCode: null,
      Message: null
    };
  }

  getAll() {
      this.setState({
        phoneNumbers: []
      })
      PhoneTableDataService.getAll()
        .then(response => {
          console.log(response.data);
          this.setState({
            phoneNumbers: response.data
          });
        })
        .catch(e => {
          console.log(e);
        });
    }

  add() {
      PhoneTableDataService.add(this.state.CountryCode, this.state.PhoneNumber, this.state.Message)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }

  handleChange = (event) => {
      let value = event.target.value;
      let name = event.target.name;
      this.setState({
        [name]: value
      });
  }
  
  render() {
    const { phoneNumbers, PhoneNumber, CountryCode, Message} = this.state;
    return (
    <div id="parent">
      <div className="list row">
        <div className="col-md-6">
          <h4>Phone Scam Numbers List</h4>
          <button className="m-3 btn btn-sm btn-danger" onClick={this.getAll}>Get Latest Phone Scam Numbers</button>
          <JsonToTable json={phoneNumbers} />
        </div>
      </div>
      <div class="bottom-section">
          <h3>Report Phone Scam</h3>
          <form id="add-record-form">
              <label for="CountryCode">Country Code:</label>
              <input type="text" id="CountryCode" name="CountryCode" value={ this.state.CountryCode } onChange={ this.handleChange } required/><br></br>              
              <label for="PhoneNumber">Phone Number:</label>
              <input type="text" id="PhoneNumber" name="PhoneNumber" value={ this.state.PhoneNumber } onChange={ this.handleChange } required/><br></br>              
              <label for="Message">Message:</label>
              <textarea id="Message" name="Message" value={ this.state.Message } onChange={ this.handleChange } cols="50" rows="20"/><br></br>              
              <button type="submit" onClick={this.add}>Submit</button>
          </form>
      </div>
    </div>
    );
  }
}