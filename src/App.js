import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SignInScreen } from "./SignInScreen";

function App() {
  console.log("aaaa");

  const a = "aa";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SignInScreen />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;