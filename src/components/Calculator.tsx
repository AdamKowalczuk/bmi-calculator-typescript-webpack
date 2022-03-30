import React, { useState } from "react";
import "../styles/calculator.scss";
import Male from "../icons/Male.svg";
import Female from "../icons/Female.svg";
import MaleColored from "../icons/MaleColored.svg";
import FemaleColored from "../icons/FemaleColored.svg";
import Plus from "../icons/Plus.svg";
import Minus from "../icons/Minus.svg";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
const Calculator = (props:any) => {
  let history = useHistory();
  const [height, setHeight] = useState(160);
  const handleSliderChange = (e: any) => {
    setHeight(e.target.value);
  };
  const [sex, setSex] = useState("male");
  const [weight, setWeight] = useState(72);
  const [age, setAge] = useState(18);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#58cbe0",
      },
    },
  });
  function calculateBmi(){
return ((weight)/(Math.pow(height/100,2))).toFixed(2)

  }
  return (
    <>
    <Nav text="BMI Calculator" />
      <div className="calculator-container">
        <div className="calculator-row1-column1 convex center" onClick={()=>setSex('male')}>
        {sex === "male" ? (
            <>
            <img src={MaleColored} alt="male" />
            <h2 className="pink">Male</h2>
          </>
          ) : (
            <>
               <img src={Male} alt="male" />
            <h2>Male</h2>
            </>
          )}
        </div>
        <div className="calculator-row1-column2 convex center" onClick={()=>setSex('female')}>
          {sex === "male" ? (
            <>
            <img src={Female} alt="female" />
            <h2>Female</h2>
          </>
          ) : (
            <>
              <img src={FemaleColored} alt="female" />
              <h2 className="pink">Female</h2>
            </>
          )}
        </div>
        <div className="calculator-row2 convex center">
          <h3>Height</h3>
          <h2>
            {height}
            <p style={{ display: "inline-block" }}>cm</p>
          </h2>
          <ThemeProvider theme={theme}>
            <Slider defaultValue={160} aria-label="Small" onChange={(e)=>handleSliderChange(e)} min={80} max={240} valueLabelDisplay="off" color="primary" />
          </ThemeProvider>
        </div>
        <div className="calculator-row3-column1 convex">
          <div className="attributes-container">
            <h3>Weight</h3>
            <h2>{weight}</h2>
          </div>
          <div className="button-container">
            <div className="convex" onClick={() => setWeight(weight + 1)}>
              <img src={Plus} alt="plus" />
            </div>
            <div className="convex" onClick={() => setWeight(weight - 1)}>
              <img src={Minus} alt="minus" />
            </div>
          </div>
        </div>
        <div className="calculator-row3-column2 convex">
          <div className="attributes-container">
            <h3>Age</h3>
            <h2>{age}</h2>
          </div>

          <div className="button-container">
            <div className="convex" onClick={() => setAge(age + 1)}>
              <img src={Plus} alt="plus" />
            </div>
            <div className="convex" onClick={() => setAge(age - 1)}>
              <img src={Minus} alt="minus" />
            </div>
          </div>
        </div>
      </div>
      <footer className="center">
        <button onClick={()=>{props.setResult(calculateBmi());history.push('/result')}}>CALCULATE</button>
      </footer>
    </>
  );
};

export default Calculator;
