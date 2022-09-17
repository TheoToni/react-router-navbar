import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function Views() {
  return (
    <Routes>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about" element={<div>About</div>}></Route>
      <Route index element={<div>Log In</div>}></Route>
      <Route path="*" element={<div>404 Not Found</div>}></Route>
    </Routes>
  );
}

export default Views;
