import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import axios from "axios";

import Articles from './components/Articles';
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

//f34a6db149d8414898913c743dab5662 

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Charts coinData={coinData} /> */}
      <Route exact path="/" component={Articles} />
      <Route path="/charts" component={Charts} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
