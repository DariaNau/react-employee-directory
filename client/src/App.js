import React from "react";
import "./App.css";
import Search from "./pages/Search/Search";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Search} />
      </div>
    </BrowserRouter>
  );
};

export default App;
