import React from "react";
import "../styles/nav.scss";
import Question from "../icons/Question.svg";
import { useHistory } from "react-router-dom";
const Nav = (props: { text: string }) => {
  let history = useHistory();
  return (
    <nav>
      <h1>{props.text}</h1>
      <img
        onClick={() => {
          history.push("/info");
        }}
        className="question"
        src={Question}
        alt="question"
      />
    </nav>
  );
};

export default Nav;
