import React from "react";
import "./styles.css";
import { Welcome } from "./welcome";
import { Summary } from "./summary";
import Axios from "axios";

export class SubForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acc: ""
    };
  }

  action1() {
    Axios.get("http://worldtimeapi.org/api/timezone")
      .then((response) => {
        console.log(response);
      })
      .catch(console.error);
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
        <button onClick={this.action1}>call</button>
      </div>
    );
  }
}
