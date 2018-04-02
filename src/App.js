import React, {Component} from "react";
import logo from "./logo.svg";
import Hero from "./Hero";
import "./App.css";

const list = [
  {title: "React", subtitle: "Description on React", logo: logo},
  {title: "Angular 2", subtitle: "Description on Angular 2", logo: "https://angular.io/assets/images/logos/angular/logo-nav@2x.png"},
  {title: "Vue.js", subtitle: "Description on Angular 2", logo: "https://avatars.mds.yandex.net/get-entity_search/114969/250691678/S122x122FitScale"},
]

class App extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {
    // console.log("Starting");
  }

  componentWillUnmount() {
    // console.log("Update")
  }

  render() {
    return (
      <div className="container">
        {list.map((item, i) => <Hero key={i} logo={item.logo} title={item.title} subtitle={item.subtitle} />)}
      </div>
    );
  }
}

export default App;
