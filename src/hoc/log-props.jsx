import React, {Component} from "react";

function logProps(Comp) {
  class LogProps extends Component{
    componentWillReceiveProps(nextProps){
      console.log('prevProps', this.props);
      console.log('nextProps', nextProps);
    }

    render(){
      return <Comp {...this.props} />;
    }
  }

  LogProps.displayName = `LogProps(${Comp.displayName || Comp.name || 'Component'})`;

  return LogProps;
}

export default logProps;