import React from "react";
import "./styles.css";

export class Summary extends React.Component {
  render() {
    return <h2>Clicks: {this.props.acc}</h2>;
  }
}
