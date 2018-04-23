import React, {Component} from "react";
import Hero from "../components/Hero";
import {Route, Switch, Redirect, NavLink} from "react-router-dom"
import { connect } from "react-redux";
import Auth from "./Auth";

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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink activeClassName='active' exact className="nav-link" to={this.props.match.path}>Все</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='active' className="nav-link" to={`${this.props.match.path}/angular5`}>Angular5</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='active' className="nav-link"
                             to={`${this.props.match.path}/react`}>React</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col">
              <Switch>
                <Route path={`${this.props.match.path}`} exact render={(props) =>{
                  return (
                    <div className="row justify-content-center align-items-center">
                    {this.props.heroes.map((item, i) =>
                      <div className="col-4" key={i}>
                        <Hero logo={item.logo} title={item.title} subtitle={item.subtitle}/>
                      </div>
                    )}
                    </div>
                  )
                }}/>
                <Route path={`${this.props.match.path}/react`} render={(props) =>{
                  let item = this.props.heroes.slice(0, 1)[0];
                  return (
                    <div className="row justify-content-center align-items-center">
                      <Hero logo={item.logo} title={item.title} subtitle={item.subtitle}/>
                    </div>
                  )
                }}/>
                <Route path={`${this.props.match.path}/angular5`} render={(props) =>{
                  let item = this.props.heroes.slice(1, 2)[0];
                  return (
                    <div className="row justify-content-center align-items-center">
                      <Hero logo={item.logo} title={item.title} subtitle={item.subtitle}/>
                    </div>
                  )
                }}/>
                <Redirect to={this.props.match.path} />
              </Switch>
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
