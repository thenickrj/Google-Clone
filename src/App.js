import React from "react";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />{" "}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* Home (the one with the search on )*/}
        {/* SearchPage (the results page)*/}
      </Router>
    </div>
  );
}

export default App;
