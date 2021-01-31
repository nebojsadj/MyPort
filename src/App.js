import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Message from "./components/Message";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
