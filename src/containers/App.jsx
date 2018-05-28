import React, {Component} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Main from "./Main";
import Auth from "./Auth";
import Menu from "../components/Menu";
import Error404 from "../components/Error404";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "../components/Modal";
import UserCart from "./UserCart";
import {connect} from "react-redux";
import Form from "../components/Form";
import {hot} from "react-hot-loader";
import RecursiveRouting from "./RecursiveRouting";
import Protected from "../components/Protected";
import AuthRoute from "./AuthRoute";
import Logout from "../actions/logout";

const history = createBrowserHistory();

class App extends Component {
  state = {
    isModalOpen: false
  };

  menu = [
    {title: "Главная", url: "/home", component: Main},
    {title: "Авторизация", url: "/auth", component: Auth},
    {title: `Пользователь`, url: "/redux-test", component: UserCart},
    {title: `Форма`, url: "/form", component: Form},
    {title: `Рекурсия`, url: "/recursive", component: RecursiveRouting},
    {title: `Protected`, url: "/protected", component: Protected},
  ];

  toggleModal = () => {
    this.setState(state => ({isModalOpen: !this.state.isModalOpen}))
  };

  render() {
    return (
      <BrowserRouter hiistory={history}>
        <ErrorBoundary>
          <Menu menu={this.menu} history={history} onModal={this.toggleModal}
                user={this.props.user} auth={this.props.auth} setLogout={this.props.setLogout}/>
          <Switch>
            {this.menu.map((item, i) => {
                if(item.url === "/protected"){
                  return (<AuthRoute key={i} path={item.url} component={item.component}  auth={this.props.auth}/>);
                }else{
                  return (<Route key={i} path={item.url} component={item.component}/>);
                }
              }
            )}
            <Route path='404' component={Error404}/>
            <Redirect to='/home'/>
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

const mapStateToProps = state => ({user: state.userInfo.user, auth: state.auth});

function mapDispatchToProps(dispatch) {
  return {
    setLogout: () => {
      dispatch(Logout())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));
