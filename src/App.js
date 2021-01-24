import React from "react";
import { Route } from "react-router-dom";
// Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";

// Framer Motion Animation explaination - https://www.framer.com/api/motion/animate-shared-layout
// Demo - https://codesandbox.io/s/framer-motion-animatesharedlayout-app-store-demo-i1kct?from-embed=&file=/src/Item.js

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id","/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
