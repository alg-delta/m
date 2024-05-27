import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Pf from "./components/Pf";
import Ni from "./components/Ni";
import Qu from "./components/Qu";
import React from "react";
import ScrollToTopButton from "./components/ScrollToTopButton";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/m">
        <Header />
        <Routes>
          <Route path="/" element={<Pf />} />
          <Route path="/2" element={<Ni />} />
          <Route path="/3" element={<Qu />} />
        </Routes>
      </BrowserRouter>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
