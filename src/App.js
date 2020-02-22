import React from "react";
import "./App.css";
import Buttons from "./Buttons";
import Formula from "./Formula";
import Result from "./Result";

const endsWith = /[*+/-]/;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: "",
      currentValue: "0",
      firstDigit: true,
      lastOperator: true
    };
    this.handleEquals = this.handleEquals.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  parse(a) {
    return new Function("return " + a)();
  }

  handleEquals() {
    console.log(this.state.formula);
    const perem = this.parse(this.state.formula);
    let answ = Math.round(10000000000000 * perem) / 10000000000000;
    this.setState({
      currentValue: answ.toString(),
      formula: answ.toString()
    });
  }

  handleOperator(e) {
    if (this.state.formula.includes("=")) {
      this.setState({
        formula: this.state.formula + e.target.value,
        currentValue: this.state.currentValue + e.target.value,
        lastOperator: true
      });
    } else {
      if (this.state.firstDigit) {
        this.setState({
          formula: e.target.value,
          currentValue: e.target.value,
          firstDigit: false,
          lastOperator: true
        });
      } else {
        this.setState({
          formula: this.state.formula + e.target.value,
          currentValue: this.state.currentValue + e.target.value,
          firstDigit: false,
          lastOperator: true
        });
      }
    }
    if (this.state.lastOperator === true) {
      this.setState({
        formula: this.state.formula.slice(0, -1) + e.target.value,
        currentValue: this.state.currentValue.slice(0, -1) + e.target.value,
        lastOperator: true
      });
    }
  }

  handleNumber(e) {
    if (this.state.firstDigit) {
      console.log("this is first digit");
      if (e.target.value === "0") {
        console.log("got 0");
        this.setState({
          formula: "0",
          currentValue: "0",
          lastOperator: false
        });
      } else {
        console.log("got ", e.target.value);
        this.setState({
          formula: e.target.value,
          currentValue: e.target.value,
          firstDigit: false,
          lastOperator: false
        });
      }
    } else {
      console.log("not a first digit");
      this.setState({
        formula: this.state.formula + e.target.value,
        currentValue: this.state.currentValue + e.target.value,
        firstDigit: false,
        lastOperator: false
      });
    }
  }

  handleDecimal() {
    console.log("handling decimal");
    if (!this.state.currentValue.includes(".")) {
      console.log("dot included");
      this.setState({
        currentValue: this.state.currentValue + ".",
        formula: this.state.formula + ".",
        lastOperator: false,
        firstDigit: false
      });
    } else {
      console.log("no dot");
      if (endsWith.test(this.state.currentValue)) {
        console.log("ends with operator");
        const regEx = /(-?\d+\.?\d*)$/;
        this.setState({
          currentValue: this.state.currentValue.match(regEx)[0] + ".",
          formula: this.state.formula + ".",
          lastOperator: false
        });
      } else {
        console.log("does not end with operator - do nothing!");
      }
    }
  }

  handleClear() {
    this.setState({
      formula: "",
      currentValue: "0",
      firstDigit: true
    });
  }

  render() {
    return (
      <div>
        <Formula formula={this.state.formula} />
        <Result currentValue={this.state.currentValue} />
        <Buttons
          equals={this.handleEquals}
          operator={this.handleOperator}
          number={this.handleNumber}
          decimal={this.handleDecimal}
          clear={this.handleClear}
        />
      </div>
    );
  }
}
export default Calculator;
