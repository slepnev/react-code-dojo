import React, {Component} from "react";
import ReactDOM from 'react-dom';


class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {opacity: false};
  }

  toggle(){
    const tooltipNode = ReactDOM.findDOMNode(this);
    console.log(tooltipNode);
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    })
  }

  render() {
    const style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) -30
    };
    return (
      <div style={{display: "inline"}}>
        <span style={{color: "blue"}}
          onMouseEnter={this.toggle}
          onMouseOut={this.toggle}>
          {this.props.children}
        </span>
         {this.props.text}
      </div>
    );
  }
}
export default Tooltip;