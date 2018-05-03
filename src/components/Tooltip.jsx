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
      top: (this.state.top || 0) - 34,
      left: (this.state.left || 0) -30
    };
    return (
      <div style={{display: "inline", cursor: "pointer"}}>
        <span style={{color: "blue"}}
          onMouseEnter={this.toggle}
          onMouseOut={this.toggle}>
          {this.props.children}
        </span>
        <div className="tooltip bs-tooltip-left" style={style}>
          <div className="tooltip-arrow"></div>
          <div className="tooltip-inner">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}
export default Tooltip;