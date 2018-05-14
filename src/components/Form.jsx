import React, {Component} from "react";
import Tooltip from "./Tooltip";
import {hot} from "react-hot-loader";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      text: "type here",
      select: "react"
    };

    // this.helper();
  }

  helper() {
    setInterval(()=>{
      console.log(this.state.text);
    }, 1000);
  }

  handleText({target: {id, value}}) {
    return this.setState({text: value});
  }

  handleSelect({target: {id, value}}) {
    return this.setState({text: value, select: value});
  }

  render() {
    return (
      <div className="container mt-5 bg-light p-5">
        <form className="row justify-content-center">
          <div className="col-12 text-center text-dark mb-4">
            Никогда не наводите мышкой на <Tooltip text="Ты проиграл :)">ЭТОТ ТЕКСТ!</Tooltip>
          </div>
          <hr className="w-100"/>
          <div className="col-auto">
            <label className="text-dark h3">
              <p>Textarea:</p>
              <textarea className="btn btn-secondary text-left"
                        name="text" cols="30" rows="10" value={this.state.text}
                        onChange={this.handleText}>
                            </textarea>
            </label>
          </div>
          <div className="col-auto">
            <label className="text-dark h3">
              <p>Select:</p>
              <select name="select" className="btn btn-secondary"
                      value={this.state.select} onChange={this.handleSelect}>
                <option value="angular">Angular</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;