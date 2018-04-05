import React, {Component} from "react";
import logo from "../../logo.svg";
import Hero from "../Hero/Hero";
import "./App.scss";

const list = [
  {title: "React", subtitle: "Description on React", logo: logo},
  {
    title: "Angular 2",
    subtitle: "Description on Angular 2",
    logo: "https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
  },
  {
    title: "Vue.js",
    subtitle: "Description on Angular 2",
    logo: "https://avatars.mds.yandex.net/get-entity_search/114969/250691678/S122x122FitScale"
  },
];

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
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          {list.map((item, i) =>
            <div className="col-4" key={i}>
              <Hero logo={item.logo} title={item.title} subtitle={item.subtitle}/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Main;
