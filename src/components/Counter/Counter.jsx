import React, {Component} from "react";
import "./Counter.scss";


class Counter extends Component {
  render() {
    return (
      <div className="input-group justify-content-center">
        <div className="input-group-prepend">
          <button className="btn btn-danger" type="button" onClick={this.props.minusClick}>-</button>
        </div>
        <span className="input-group-text">{this.props.count}</span>
        <div className="input-group-append">
          <button className="btn btn-success" type="button" onClick={this.props.pluseClick}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
