import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Wrapper from "../styled-components/Wrapper";
import Button from "../styled-components/Button.jsx";
import LinkButton from "../styled-components/LinkButton.jsx";
const chance = require("chance").Chance();

class Generator extends Component {
  state = {
    luckyIndex: 0,
    array: [],
  };

  componentDidMount() {
    this.formatLocalStorage();
  }

  formatStringToArr = (string) => {
    return string.replace(/[\r\n]+/gm, ", ").split(", ");
  };

  formatLocalStorage = () => {
    let peopleArray = this.formatStringToArr(localStorage.people);
    peopleArray = chance.shuffle(peopleArray);
    localStorage.setItem("people", peopleArray.join(", "));

    this.setState({
      array: peopleArray,
    });
  };

  handleChange = () => {
    let arrLength = this.state.array.length;

    if (this.state.luckyIndex < arrLength) {
      this.setState({
        luckyIndex: this.state.luckyIndex + 1,
      });
    }
  };

  render() {
    let peopleLeft = this.state.array.length - this.state.luckyIndex - 1;

    return (
      <Wrapper primary>
        <div className="lucky-duck">
          <h3>Who's the lucky duck?</h3>
          <h1 id="lucky-duck">{this.state.array[this.state.luckyIndex]}</h1>
        </div>

        {peopleLeft === 1 ? (
          <p>
            There is <strong>{peopleLeft} left.</strong>
          </p>
        ) : (
          <p>
            There are <strong>{peopleLeft} left.</strong>
          </p>
        )}

        {peopleLeft === 0 ? (
          <LinkButton href="/list" primary>
            Back to list
          </LinkButton>
        ) : (
          <Button onClick={this.handleChange} primary>
            Next spin
          </Button>
        )}
      </Wrapper>
    );
  }
}

export default withRouter(Generator);
