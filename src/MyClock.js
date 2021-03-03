import React from "react";
import ReactDOM from "react-dom";

class MyClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mydate: new Date() };
  }
  componentDidMount() {
    this.myid = setInterval(() => this.changeDate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myid);
  }
  changeDate() {
    this.setState({ mydate: new Date() });
  }
  render() {
    return <p>Current Time : {this.state.mydate.toLocaleTimeString()}</p>;
  }
}
export default MyClock;
