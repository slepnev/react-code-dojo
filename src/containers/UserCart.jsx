import React, {Component} from "react";
import { connect } from "react-redux";
import User from "../components/User";
import Year from "../components/Year";
import setYearAction from "../actions/year"
import setUserNameAction from "../actions/userName"

class UserCart extends Component {

  render() {
    return (
      <div className="container">
        {JSON.stringify(this.props)}
        <div className="row justify-content-center mt-3">
          <div className="col-5">
            <User {...this.props}/>
          </div>
          <div className="col-3">
            <Year year={this.props.year} setYear={this.props.setYearFunction}/>
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
    setYearFunction: year => {
      dispatch(setYearAction(year))
    },
    setUserNameFunction: name => {
      dispatch(setUserNameAction(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCart);