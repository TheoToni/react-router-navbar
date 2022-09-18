import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
function Views() {
  return (
    <Routes>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>

      <Route path="*" element={<div>404 Not Found</div>}></Route>
    </Routes>
  );
}

export default Views;
