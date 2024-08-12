import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "../App.css";
import WordPart from "./WordPart";
const RouterApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/content" element={<WordPart></WordPart>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterApp;
