import React, {Component} from "react";
import Counter from "../Counter/Counter"
import "./Hero.scss"


class Hero extends Component {

  constructor(){
    super();
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.pluseClick = this.pluseClick.bind(this);
    this.minusClick = this.minusClick.bind(this);
  }

  handleClick(){
    this.setState({count: this.state.count + 1});
  }

  pluseClick() {
    this.setState({count: this.state.count + 1});
  }

  minusClick() {
    if (this.state.count < 1){
      return false;
    }
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div className="container hero">
        <img src={this.props.logo} alt="" height="60px" onClick={this.handleClick}/>
        <h1>{this.props.title}</h1>
        <div className="app">{this.props.subtitle}</div>
        <div className="mt-2">
          <Counter count={this.state.count} minusClick={this.minusClick} pluseClick={this.pluseClick} />
        </div>
      </div>
    );
  }
}

export default Hero;
