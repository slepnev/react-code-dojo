import React, {Component} from "react"
import {Route, BrowserRouter, Switch} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import Main from "./Main"
import Auth from "./Auth"
import Menu from "../components/Menu"
import Error404 from "../components/Error404"
import ErrorBoundary from "./ErrorBoundary"
import Modal from "../components/Modal";
import UserCart from "./UserCart";
import Year from "../components/Year"
import { connect } from "react-redux";

const history = createBrowserHistory();

class App extends Component {
  state = {
    isModalOpen: false
  };

  menu = [
    {title: "Главная", url: "/", component: Main},
    {title: "Авторизация", url: "/auth", component: Auth},
    {title: `Пользователь (${this.props.user})`, url: "/redux-test", component: UserCart},
  ];

  toggleModal = () => {
    this.setState(state => ({ isModalOpen: !this.state.isModalOpen }))
  };

  render() {
    return (
      <BrowserRouter hiistory={history}>
        <ErrorBoundary>
          <Menu menu={this.menu} history={history} onModal={this.toggleModal} user={this.props.user}/>
          <Switch>
            {this.menu.map((item, i) =>
              <Route key={i} exact path={item.url} component={item.component} />
            )}
            <Route component={Error404}/>
          </Switch>
          {this.state.isModalOpen &&
            <Modal onClose={this.toggleModal}>
              <Auth />
            </Modal>
          }
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userInfo.user
  }
}

export default connect(mapStateToProps)(App);
