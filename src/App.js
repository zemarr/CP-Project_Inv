import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Counter from "./components/Counter/Counter";
import Header from "./components/Navbar/Navbar";
import GlobalStyle from "./GlobalStyles";
import LandingPage from "./Pages/LandingPage/LandingPage";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
