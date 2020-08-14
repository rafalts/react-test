import React from "react";
import "./styles.css";
import { Welcome } from "./welcome";
import { Summary } from "./summary";

export class SubForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acc: ""
    };
  }

  passButt(butt) {
    console.log(butt);
    this.setState({ acc: this.state.acc + butt });
  }

  render() {
    return (
      <div>
        <Welcome name="Raf" sendButt={this.passButt.bind(this)} />
        <Summary acc={this.state.acc} />
      </div>
    );
  }
}
