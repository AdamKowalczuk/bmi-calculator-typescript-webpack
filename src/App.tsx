import React, { useState, Suspense, lazy } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Calculator = lazy(() => import("./components/Calculator"));
const Results = lazy(() => import("./components/Results"));
const Info = lazy(() => import("./components/Info"));

const App = () => {
  const [result, setResult] = useState(0);
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="balls-container">
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        }
      >
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Calculator result={result} setResult={setResult} />
            </Route>
            <Route path="/result">
              <Results result={result} />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then((registration) => console.log(`Service Worker registration complete, scope: '${registration.scope}'`))
      .catch((error) => console.log(`Service Worker registration failed with error: '${error}'`));
  });
}

export default App;
