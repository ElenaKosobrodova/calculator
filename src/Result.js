import React from "react";

class Result extends React.Component {
  render() {
    return <div id="display">{this.props.currentValue}</div>;
  }
}

export default Result;
