import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/index";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </Router>
  );
}

export default App;
