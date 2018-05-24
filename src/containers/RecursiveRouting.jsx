import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const PEEPS = [
  { id: 1, name: "Michelle", friends: [1, 2, 3] },
  { id: 2, name: "Sean", friends: [4, 3] },
  { id: 3, name: "Kim", friends: [4, 1, 3] },
  { id: 4, name: "David", friends: [1, 2] }
];

const find = id => PEEPS.find(p => p.id == id);

const Person = ({ match }) => {
  const person = find(match.params.id);

  return (
    <div>
      <h3>{person.name}’s Friends</h3>
      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person}/>
    </div>
  );
};

class RecursiveRouting extends Component {
  render() {
    return (
      <Router>
        <div className="container mb-4">
          <div className="row justify-content-center">
            <div className="col-7 mt-4 p-4 bg-white text-dark">
              <Person match={{params: {id: 1}, url: "/recursive"}}/>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default RecursiveRouting;