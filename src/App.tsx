import React, { useState } from "react";
import "./App.scss";
import Calculator from "./components/Calculator";
import Results from "./components/Results";
import Info from "./components/Info";
import { BrowserRouter, Switch, Route } from "react-router-dom";


const App = () => {
  const [result,setResult]=useState(0);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Calculator result={result} setResult={setResult}/>
          </Route>
          <Route path="/result">
            <Results result={result} />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("serviceWorker.tsx");
//   });
// }
export default App;
