import React, {Component} from "react";
import { connect } from "react-redux";
import {setUserDataAction} from "../../actions/actionUser"


class Auth extends Component {

  constructor(props) {
    super();

    this.state = {
      email: props.email,
      password: props.password
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: {id, value} }){
    this.setState(state => ({...state, [id]: value}));
  }

  onSubmit(e){
    e.preventDefault();
    this.props.setUserDataFunction({ email: this.state.email, password: this.state.password });
  }

  onReset(e){
    e.preventDefault();
    this.props.setUserDataFunction({ email: '', password: ''});
    this.setState({ email: '', password: ''});
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7 mt-4 p-4 bg-white text-dark">
            <h1>Форма авторизации</h1>
            <form onSubmit={this.onSubmit} onReset={this.onReset}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                placeholder="Enter email" value={this.state.email} onChange={this.handleChange}/>
                <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password"
                 value={this.state.password} onChange={this.handleChange} />
              </div>
              <div>
                <button type="submit" className="btn btn-primary">Отправить</button>
                <button type="reset" className="btn float-right">Сбросить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {...state.userInfo}
}

function mapDispatchToProps(dispatch) {
  return {
    setUserDataFunction: data => {
      dispatch(setUserDataAction(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
