import React from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

export default class Modal extends React.Component {
  componentWillMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <button className="modal__close-button btn btn-danger" onClick={this.props.onClose}>Закрыть</button>
        {this.props.children}
      </div>,
      this.root
    );
  }
}