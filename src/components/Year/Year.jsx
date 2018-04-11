import React, { Component } from "react";

class Year extends Component {
  constructor(props){
    super();
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(event){
    return this.props.setYear(event.target.textContent);
  }

  render() {
    return (
      <div className="btn-group btn-group-vertical">
        <button className="btn btn-info" onClick={this.onBtnClick}>1990</button>
        <button className="btn btn-info" onClick={this.onBtnClick}>2000</button>
        <button className="btn btn-info" onClick={this.onBtnClick}>2010</button>
        <p className="mt-2">This year has been chosen - {this.props.year}</p>
      </div>
    );
  }

}

export default Year;