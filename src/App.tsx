import React, { useMemo } from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import "./assets/styles/app.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Router />
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
