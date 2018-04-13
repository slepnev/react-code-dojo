import React, {Component} from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    console.log('error', error);
    console.log('info', info);
    this.setState({hasError: false});
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="text-danger">Произошла ошибка</h1>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
