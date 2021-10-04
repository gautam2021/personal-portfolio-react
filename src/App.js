import React from "react";
import "./App.css";
// import Banner from "./components/Banner";
import Nav from "./components/Nav";



import ContactUs from "./pages/ContactUs";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Education from "./pages/Education";
import MyProjects from "./components/Projects";
import Home from "./Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route  path="/prices" ><Education /></Route>
          <Route  path="/projects" ><MyProjects /></Route>
          <Route  path="/about" ><AboutUs /></Route>
          <Route  path="/contact" ><ContactUs /></Route>
          <Route  ><Home /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
