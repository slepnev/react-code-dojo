import React, {Component} from "react";
import "./Hero.css"

class Hero extends Component {

  constructor(props){
    super();
    this.state = props;
  }

  render() {
    return (
      <div className="container hero">
        <img src={this.state.logo} alt="" height="60px"/>
        <h1>{this.state.title}</h1>
        <div className="app">{this.state.subtitle}</div>
      </div>
    );
  }
}

export default Hero;
