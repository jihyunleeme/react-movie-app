import React from 'react'
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return <HashRouter>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
  </HashRouter>
}

export default App;