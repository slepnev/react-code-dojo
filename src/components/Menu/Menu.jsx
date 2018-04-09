import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";

class Main extends Component {

  constructor(props) {
    super();
    this.menuCollapse = this.menuCollapse.bind();
  }

  menuCollapse(){
    console.log('Menu app');
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">React 16</Link>
        <button className="navbar-toggler" type="button" onClick={this.menuCollapse}
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            {this.props.menu.map((item, i) =>
                <li key={i} className="nav-item">
                  <NavLink activeClassName='active' className="nav-link" exact to={item.url}>{item.title}</NavLink>
                </li>

            )}
          </ul>
          <span className="navbar-text">
            <a href="" className="nav-link" onClick={(e) => {e.preventDefault(); this.props.onModal();}}>
              Открыть модальное окно (Portal)</a>
          </span>
        </div>
      </nav>
    );
  }
}

export default Main;
