import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  const IngredientsList = ({list}) =>
    React.createElement('ul', null,
      list.map((ingredient, i) =>
        React.createElement('li', {key: i}, ingredient)
      )
    );
  const Ingredients = React.createFactory(IngredientsList);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
