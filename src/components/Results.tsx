import React from "react";
import Nav from "./Nav";
import { useHistory } from "react-router-dom";
import "../styles/result.scss";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Results = (props: any) => {
  let history = useHistory();
  function returnBodyWeightName(bmi: number) {
    let result = "";
    if (bmi < 18.5) {
      result = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      result = "Overweight";
    } else {
      result = "Obese";
    }
    return result;
  }
  function returnWeightDescription(bmi: number) {
    let result = "";
    if (bmi < 18.5) {
      result = "Underweight could be a sign you're not eating enough or you may be ill. If you're underweight, a GP can help.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result = "Keep it up. You have a healthy BMI level, but you shouldn't stop taking care of yourself!";
    } else if (bmi >= 25 && bmi < 29.9) {
      result = "The best way to lose weight if you're overweight is through a combination of diet and exercise.";
    } else {
      result =
        "The best way to lose weight if you're obese is through a combination of diet and exercise, and, in some cases, medicines. See a GP for help and advice.";
    }
    return result;
  }
  return (
    <>
      <Nav text="BMI Results" />
      <div className="results-container">

<rect><CircularProgressbar background
        backgroundPadding={6} className="circle" value={props.result} minValue={10} maxValue={50} text={props.result} strokeWidth={12}/></rect>


        <div className="text">
        <h3>You have <b>{returnBodyWeightName(props.result)}</b> body weight!</h3>
        <h4>{returnWeightDescription(props.result)}</h4>
        </div>

      </div>

      <footer className="center result-footer">
        <button onClick={() => history.push("/")}>Go back</button>
      </footer>
    </>
  );
};

export default Results;
