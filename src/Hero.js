import React, {Component} from "react";
import "./Hero.css"


class Hero extends Component {

  constructor(props){
    super();
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div className="container hero">
        <div className="count">{this.state.count}</div>
        <img src={this.props.logo} alt="" height="60px" onClick={this.handleClick}/>
        <h1>{this.props.title}</h1>
        <div className="app">{this.props.subtitle}</div>
      </div>
    );
  }
}

export default Hero;
