import React, {Component} from "react";
import Hero from "../components/Hero";
import {Route, Switch, Redirect} from "react-router-dom"
import { connect } from "react-redux";

class Main extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {
    console.log("Starting");
  }

  componentWillUnmount() {
    console.log("Destroy")
  }

  componentWillReceiveProps(nextProps) {
    console.log("Update props")
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-auto">
            <Switch>
              {/*<Route path='' exact render={ props => {*/}
                {/*<Hero logo='123' title='123' subtitle='123'/>*/}
              {/*}}/>*/}
              {/*<Route path='2' exact render={ props => {*/}
                {/*<Hero logo='123' title='123' subtitle='123'/>*/}
              {/*}}/>*/}
              <Redirect to='' />
            </Switch>
          </div>
          <div className="col">
            <div className="row justify-content-center align-items-center">
              {this.props.heroes.map((item, i) =>
                <div className="col-4" key={i}>
                  <Hero logo={item.logo} title={item.title} subtitle={item.subtitle}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {heroes: [...state.heroes]}
}

export default connect(mapStateToProps)(Main);
