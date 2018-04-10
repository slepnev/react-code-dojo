import React, {Component} from "react";
import { connect } from "react-redux";
import User from "../User/User";
import Year from "../Year/Year";
import setYearAction from "../../actions/actionYear"

class StoreTest extends Component {

  render() {
    return (
      <div className="container">
        {JSON.stringify(this.props)}
        <div className="row justify-content-center mt-3">
          <div className="col-4">
            <User {...this.props}/>
          </div>
          <div className="col-4">
            <Year year={this.props.year} setYear={this.props.setYearFunction}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userInfo.user,
    year: state.userInfo.year
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setYearFunction: year => {
      dispatch(setYearAction(year))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreTest);