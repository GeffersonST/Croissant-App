import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/index";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature/index";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Hero />
      <Products heading="Escolha o seu favorito" data={productData} />
      <Feature />
      <Products heading="Escolha o seu Café" data={productDataTwo} />
    </Router>
  );
}

export default App;
