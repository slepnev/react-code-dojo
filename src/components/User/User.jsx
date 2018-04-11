import React, {Component} from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    user: this.props.user
  };

  handleChange({target: {id, value}}) {
    return this.setState({user: value});
  }

  handleSubmit() {
    return this.props.setUserNameFunction(this.state.user);
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>User - {this.props.user}</h1>
            <ul>
              <li>{this.props.email}</li>
              <li>{this.props.password}</li>
            </ul>
            <div className="form-group">
              <input type="user" className="form-control" id="user" placeholder="User name"
                     value={this.state.user} onChange={this.handleChange}/>
              <button className="mt-2 btn btn-success" type="button" onClick={this.handleSubmit}>Переименовать</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default User;