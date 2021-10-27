import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Message from "./components/Message";
import ScrollToTop from "./components/ScrollToTop";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize(211321248);
  }, []);

  return (
    <div>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
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
