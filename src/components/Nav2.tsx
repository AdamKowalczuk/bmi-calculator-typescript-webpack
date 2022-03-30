import React from "react";
import "../styles/nav.scss";
import AngleSmallLeft from "../icons/AngleSmallLeft.svg";
import { useHistory } from "react-router-dom";
const Nav2 = (props: { text: string }) => {
  let history = useHistory();
  return (
    <nav>
      <img src={AngleSmallLeft} className="angle" alt="angle small left" onClick={() => history.push("/")} />
      <h1>{props.text}</h1>
    </nav>
  );
};

export default Nav2;
