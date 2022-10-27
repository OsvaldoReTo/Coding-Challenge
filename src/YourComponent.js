import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Map from "./components/Map";

export default class YourComponent extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1> Put your solution here!</h1>

        <Row>
          <Col md="12" lg="8" style={colStyle}>
            <Map />
          </Col>

          <Col md="12" lg="4" style={colStyle}>
          </Col>
        </Row>
        
      </div>
    );
  }
}

var divStyle = {
  border: "red",
  borderWidth: 2,
  borderStyle: "solid",
  height: "100vh",
};

var colStyle = {
  height: "85vh",
  padding: 20,
};
