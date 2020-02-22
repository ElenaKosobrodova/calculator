import React from "react";

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button
          id="brackets"
          value="("
          className="butn operator"
          onClick={this.props.number}
        >
          (
        </button>
        <button
          id="brackets"
          value=")"
          className="butn operator"
          onClick={this.props.number}
        >
          )
        </button>
        <button
          id="pi"
          value="3.14159"
          className="butn operator"
          onClick={this.props.number}
        >
          &pi;
        </button>
        <button
          id="clear"
          value="AC"
          className="butn"
          onClick={this.props.clear}
        >
          AC
        </button>
        <button
          id="one"
          value="1"
          className="butn number"
          onClick={this.props.number}
        >
          1
        </button>
        <button
          id="two"
          value="2"
          className="butn number"
          onClick={this.props.number}
        >
          2
        </button>
        <button
          id="three"
          value="3"
          className="butn number"
          onClick={this.props.number}
        >
          3
        </button>
        <button
          id="add"
          value="+"
          className="butn operator"
          onClick={this.props.operator}
        >
          +
        </button>
        <button
          id="four"
          value="4"
          className="butn number"
          onClick={this.props.number}
        >
          4
        </button>
        <button
          id="five"
          value="5"
          className="butn number"
          onClick={this.props.number}
        >
          5
        </button>
        <button
          id="six"
          value="6"
          className="butn number"
          onClick={this.props.number}
        >
          6
        </button>
        <button
          id="subtract"
          value="-"
          className="butn operator"
          onClick={this.props.operator}
        >
          -
        </button>
        <button
          id="seven"
          value="7"
          className="butn number"
          onClick={this.props.number}
        >
          7
        </button>
        <button
          id="eight"
          value="8"
          className="butn number"
          onClick={this.props.number}
        >
          8
        </button>
        <button
          id="nine"
          value="9"
          className="butn number"
          onClick={this.props.number}
        >
          9
        </button>
        <button
          id="multiply"
          value="*"
          className="butn operator"
          onClick={this.props.operator}
        >
          x
        </button>
        <button
          id="zero"
          value="0"
          className="butn number"
          onClick={this.props.number}
        >
          0
        </button>
        <button
          id="decimal"
          value="."
          className="butn number"
          onClick={this.props.decimal}
        >
          .
        </button>
        <button
          id="equals"
          value="="
          className="butn operator"
          onClick={this.props.equals}
        >
          =
        </button>
        <button
          id="divide"
          value="/"
          className="butn operator"
          onClick={this.props.number}
        >
          /
        </button>
      </div>
    );
  }
}

export default Buttons;
