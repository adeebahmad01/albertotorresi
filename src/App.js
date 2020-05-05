import React from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Products";
import Footer from "./components/Layout/Footer";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Login />
        <Route component={Home} exact path="/" />
        <Route component={Product} exact path="/products" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
