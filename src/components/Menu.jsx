import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";

class Menu extends Component {

  constructor(props) {
    super(props);
    this.menuCollapse = this.menuCollapse.bind(this);
    this.logout = this.logout.bind(this);
  }

  menuCollapse(){
    console.log('Menu app');
  }

  logout(){
    this.props.setLogout();
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
                  <NavLink activeClassName='active' className="nav-link" to={item.url}>{item.title}</NavLink>
                </li>

            )}
          </ul>
          <span className="navbar-text">
            {
              !this.props.auth ?
                <button className="btn btn-success" onClick={(e) => {e.preventDefault();this.props.onModal();}}>
                  Войти (Portal)</button>
                :
                <button className="btn btn-danger" onClick={(e) => {e.preventDefault(); this.logout();}}>Выйти</button>
            }
          </span>
        </div>
      </nav>
    );
  }
}

export default Menu;
