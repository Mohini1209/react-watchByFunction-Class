import React from "react";
import ReactDOM from "react-dom";

class Factorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props };
  }
  numFactorial(props) {
    var fact = 1;
    var i = 1;
    for (i = 1; i <= props; i++) {
      fact = fact * i;
    }
    return fact;
  }
  render() {
    return (
      <p>
        Factorial of {this.props.number} is :{" "}
        {this.numFactorial(this.props.number)}
      </p>
    );
  }
}
export default Factorial;
