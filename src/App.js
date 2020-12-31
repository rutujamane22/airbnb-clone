import React from "react";
import "./styles.css";
import Header from "./Header.js";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
            {/* banner */}
            {/* Date Picker */}
            {/* Cards */}
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}
