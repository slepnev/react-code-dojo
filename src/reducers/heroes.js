import logo from "../images/logo.svg";

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

export default function heroes(state = list, action) {
  switch (action.type){
    default:
      return state;
  }
}