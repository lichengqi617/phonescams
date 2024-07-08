import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PhoneTableList from "./components/component";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<PhoneTableList/>} />
          </Routes>
        </div>
        <a href="https://amzn.to/3LgQt4K">
            Amazon advertisement
        </a>
      </div>
    );
  }
}

export default App;
