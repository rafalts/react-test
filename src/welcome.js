import React from "react";
import "./styles.css";

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  onClicked(butt) {
    this.setState({ value: butt });

    if (this.props.sendButt) {
      this.props.sendButt(butt);
    }
  }

  render() {
    return (
      <div>
        <h1>
          Hello {this.props.name} ({this.state.value})
        </h1>
        <button onClick={() => this.onClicked("a")}>a</button>
        <button onClick={() => this.onClicked("b")}>b</button>
      </div>
    );
  }
}

//export default Welcome
