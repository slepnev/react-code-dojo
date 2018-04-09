import React, {Component} from "react";
import { connect } from "react-redux";

class Store extends Component {

  render() {
    return (<div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-auto">
            <h1>User - Redux test</h1>
            <ul>
              <li>{this.props.user}</li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}


function mapStateToProps(state) {
  return {
    user: state.userInfo.user
  }
}
export default connect(mapStateToProps)(Store);