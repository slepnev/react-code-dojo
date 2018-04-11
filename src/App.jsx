import React, {Component} from "react"
import {Route, BrowserRouter} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import Main from "./components/Main/Main"
import Auth from "./components/Auth/Auth"
import Menu from "./components/Menu/Menu"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"
import Modal from "./components/Modal/Modal";
import StoreTest from "./containers/StoreTest/StoreTest";
import { connect } from "react-redux";

const history = createBrowserHistory();

class App extends Component {
  state = {
    isModalOpen: false
  };

  menu = [
    {title: "Главная", url: "/", component: Main},
    {title: "Авторизация", url: "/auth", component: Auth},
    {title: `Пользователь (${this.props.user})`, url: "/redux-test", component: StoreTest},
  ];

  toggleModal = () => {
    this.setState(state => ({ isModalOpen: !this.state.isModalOpen }))
  };

  render() {
    return (
      <BrowserRouter hiistory={history}>
        <ErrorBoundary>
          <Menu menu={this.menu} history={history} onModal={this.toggleModal} user={this.props.user}/>
          {this.menu.map((item, i) =>
            <Route key={i} exact path={item.url} component={item.component} />
          )}
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
