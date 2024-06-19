// eslint-disable-next-line no-unused-vars
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tiempos from "./components/Tiempos";
import Datos from "./components/Datos";

function App() {
  return (
    <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Tiempos />} />
            <Route path="/datos" element={<Datos />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App;
