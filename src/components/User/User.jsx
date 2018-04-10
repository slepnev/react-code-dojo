import React, {Component} from "react";

class User extends Component {

  render() {
    return (<div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-auto">
            <h1>User - {this.props.user}</h1>
          </div>
        </div>
      </div>

    );
  }
}
export default User;