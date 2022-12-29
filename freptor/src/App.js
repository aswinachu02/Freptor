import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./presentation/pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
